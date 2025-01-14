import { defineStore } from "pinia";


export const useStore = defineStore("", {
    state: () => ({
        locomotive: "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9",
        wagons: [
            {
                pattern: encodeURI("\\d"),
                flags: { g: true, i: false, m: false },
                replace: "",
                active: true
            },
            {
                pattern: encodeURI("lazy"),
                flags: { g: false, i: false, m: false },
                replace: "quick",
                active: true
            },
            {
                pattern: encodeURI("quick"),
                flags: { g: false, i: false, m: false },
                replace: "lazy",
                active: true
            }
        ],
        caboose: "Arrival"
    }),
    getters: {
        nodes: (state) => {
            let nodes_to_be = []
            nodes_to_be = nodes_to_be.concat({
                id: "-1",
                type: "input",
                position: { x: 0, y: 0 },
                dimensions: { width: 600, height: 500 },
                data: { label: state.locomotive },
            },
                [...state.wagons.map((wagon, index) => ({
                    id: index,
                    type: "wagon",
                    position: { x: -100 + 100 * index, y: 200 },
                    data: { label: decodeURI(wagon.pattern), flags: wagon.flags },
                }))], {
                id: "3",
                type: "output",
                position: { x: 0, y: 400 },
                data: { label: state.caboose },
            }
            )

            console.log(nodes_to_be)
            return nodes_to_be
        },
        edges: (state) => ([
            // default bezier edge
            // consists of an edge id, source node id and target node id
            {
                id: "e1->2",
                source: "1",
                target: "2",
            },

            // set `animated: true` to create an animated edge path
            {
                id: "e2->3",
                source: "2",
                target: "3",
                animated: true,
            }, {
                id: "e-2->0",
                source: "-1",
                target: "0",
                animated: true,
            }, {
                id: "e0->1",
                source: "0",
                target: "1",
                animated: true,
            },
        ])
    },
    actions: {
        toggleFlag({ state, commit }, payload) {
            state.wagons[payload.index].flags[payload.flag] = payload.flag;
            commit("updateCaboose");
            commit("storeWagons");
        },
        updateLocomotive({ state, commit }, value) {
            state.locomotive = value;
            commit("updateCaboose");
        },
        toggleWagon({ state, commit }, index) {
            state.wagons[index].active = !state.wagons[index].active;
            commit("updateCaboose");
            commit("storeWagons");
        },
        addWagon({ state, commit }, index) {
            state.wagons.splice(index, 0, {
                pattern: "",
                flags: { g: false, i: false, m: false },
                replace: "",
                active: true
            });
            commit("updateCaboose");
            commit("storeWagons");
        },
        removeWagon({ state, commit }, index) {
            state.wagons.splice(index, 1);
            commit("updateCaboose");
            commit("storeWagons");
        },
        updateReplace({ state, commit }, payload) {
            state.wagons[payload.index].replace = encodeURI(payload.value || "");
            commit("updateCaboose");
            commit("storeWagons");
        },
        updatePattern({ state, commit }, payload) {
            state.wagons[payload.index].pattern = encodeURI(payload.value || "");
            commit("updateCaboose");
            commit("storeWagons");
        },
        moveWagon({ state, commit }, payload) {
            if (payload.direction === "up") {
                //we take care of index=0 case with UI so index 0 will never come here
                state.wagons.splice(payload.index - 1, 2, state.wagons[payload.index], state.wagons[payload.index - 1]);
            }
            if (payload.direction === "down") {
                //we take care of index=length-1 case with UI so RangeError is not possible
                state.wagons.splice(payload.index, 2, state.wagons[payload.index + 1], state.wagons[payload.index]);
            }
            commit("updateCaboose");
            commit("storeWagons");

        }
    },
})