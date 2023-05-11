const state = {
    data: {
        menuAbierto: false,
    },
    listeners: [],

    init() {
        const localData = JSON.parse(localStorage.getItem("data") as string);
        if (!localData) {
            return;
        }
        this.setState(localData);
    },

    getState() {
        return this.data;
    },

    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();
        }
        console.log("Soy el state, he cambiado:", this.data);
    },

    suscribe(callback: (any) => any) {
        this.listeners.push(callback);
    }
}

export { state };