const CONTRACT_ADDRESS = '0xe2Ce6a3496720ad7AA92E92055aB6A0A081075ef';

const transformCharacterData = (characterData) => {
    return {
        name: characterData.name,
        imageURI: characterData.imageURI,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage: characterData.attackDamage.toNumber()
    };
};

export { CONTRACT_ADDRESS, transformCharacterData };