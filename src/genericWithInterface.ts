

interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;
    }
    smartWatch: T;
    bike?: X
}

const poorDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
}, {
    brand: string;
    engineCapacity: string;
}> = {
    name: "sharaft",
    salary: 0,
    device: {
        brand: "hp",
        model: "840 g6",
        releaseYear: "2015"
    },
    smartWatch: {
        heartRate: "200",
        stopWatch: true
    },
    bike: {
        brand: "yamaha",
        engineCapacity: "200cc"
    }
}
const richDeveloper: Developer<{
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean
}> = {
    name: "faru",
    salary: 10,
    device: {
        brand: "apple",
        model: "840 g6",
        releaseYear: "2025"
    },
    smartWatch: {
        heartRate: "500",
        callSupport: true,
        calculator: true,
        aiFeature: true
    },
    bike: null
}