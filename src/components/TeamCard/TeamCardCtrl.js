export const TeamCardCtrl = {
    handleModalOpen: (scope) => scope.setState({ addSubPlayerModal: true }),
    
    handleModalClose: (scope) => {
        scope.setState({ addSubPlayerModal: false });
        scope.setState({
            inPlayer: window.translations.enterPlayerName,
            outPlayer: window.translations.enterPlayerName,
            subMin: "",
        });
    }
};
