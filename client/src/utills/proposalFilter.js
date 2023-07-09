export const proposalFilter = (filters, proposals) => {
    const { wedding, birthday, reception, charity, party, productLaunch,
        formal, inFormal, internal, external } = filters;
    let final = [];
    let budgetArr = null;
    let proposalTypeArr = null;
    let eventTypeArr = null;
    if (wedding || birthday || reception || charity || party || productLaunch ||
        formal || inFormal || internal || external || filters["0-25000"] ||
        filters["25001-50000"] || filters["50001-75000"] || filters["75001-100000"] || filters["> 100000"]) {

        if (wedding || birthday || reception || charity || party || productLaunch) {
            eventTypeArr = [];
            if (wedding) {
                let temp = proposals.filter(({ eventType }) => eventType === "Wedding");
                eventTypeArr = [...eventTypeArr, ...temp];
            }
            if (birthday) {
                let temp = proposals.filter(({ eventType }) => eventType === "Birthday");
                eventTypeArr = [...eventTypeArr, ...temp];
            }
            if (reception) {
                let temp = proposals.filter(({ eventType }) => eventType === "Reception");
                eventTypeArr = [...eventTypeArr, ...temp];
            }
            if (charity) {
                let temp = proposals.filter(({ eventType }) => eventType === "Charity");
                eventTypeArr = [...eventTypeArr, ...temp];
            }
            if (party) {
                let temp = proposals.filter(({ eventType }) => eventType === "Party");
                eventTypeArr = [...eventTypeArr, ...temp];
            }
            if (productLaunch) {
                let temp = proposals.filter(({ eventType }) => eventType === "Product launch");
                eventTypeArr = [...eventTypeArr, ...temp];
            }

        }

        if (eventTypeArr && eventTypeArr.length === 0) return [];
        if (eventTypeArr && eventTypeArr.length > 0) {
            proposals = eventTypeArr;
            final = eventTypeArr;
        }

        if (formal || inFormal || internal || external) {
            proposalTypeArr = [];
            if (formal) {
                let temp = proposals.filter(({ proposalType }) => proposalType === "Formal");
                proposalTypeArr = [...proposalTypeArr, ...temp];
            }
            if (inFormal) {
                let temp = proposals.filter(({ proposalType }) => proposalType === "In-Formal");
                proposalTypeArr = [...proposalTypeArr, ...temp];
            }
            if (internal) {
                let temp = proposals.filter(({ proposalType }) => proposalType === "Internal");
                proposalTypeArr = [...proposalTypeArr, ...temp];
            }
            if (external) {
                let temp = proposals.filter(({ proposalType }) => proposalType === "External");
                proposalTypeArr = [...proposalTypeArr, ...temp];
            }
        }

        if (proposalTypeArr && proposalTypeArr.length === 0) return [];
        if (proposalTypeArr && proposalTypeArr.length > 0) {
            proposals = proposalTypeArr;
            final = proposalTypeArr;
        }

        if (filters["0-25000"] || filters["25001-50000"] || filters["50001-75000"] || filters["75001-100000"] || filters["> 100000"]) {
            budgetArr = [];
            if (filters["0-25000"]) {
                let temp = proposals.filter(({ budget }) => budget >= 0 && budget <= 25000);
                budgetArr = [...budgetArr, ...temp];
            }
            if (filters["25001-50000"]) {
                let temp = proposals.filter(({ budget }) => budget >= 25001 && budget <= 50000);
                budgetArr = [...budgetArr, ...temp];
            }
            if (filters["50001-75000"]) {
                let temp = proposals.filter(({ budget }) => budget >= 50001 && budget <= 75000);
                budgetArr = [...budgetArr, ...temp];
            }
            if (filters["75001-100000"]) {
                let temp = proposals.filter(({ budget }) => budget >= 75001 && budget <= 100000);
                budgetArr = [...budgetArr, ...temp];
            }
            if (filters["> 100000"]) {
                let temp = proposals.filter(({ budget }) => budget > 100000);
                budgetArr = [...budgetArr, ...temp];
            }

        }

        if (budgetArr && budgetArr.length === 0) return [];
        if (budgetArr && budgetArr.length > 0) {
            final = budgetArr;
        }

        return final;
    } else return false;
}
