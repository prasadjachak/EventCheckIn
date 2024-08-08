
export class modelsdata {
    static getquestiontypes() {
      return [{ Key: '1', Value: 'Page', type: '^' },
        {
          Key: '2', Value: 'Text', type: 'T' },
        {
          Key: '3', Value: 'Survey', type: 'S' },
        {
          Key: '4', Value: 'Checkbox', type: 'C' },
        {
          Key: '5', Value: 'Radio', type: 'R' },
        {
          Key: '6', Value: 'Option', type: 'O' },
        {
          Key: '7', Value: 'Table', type: 'TA' },
        {
          Key: '8', Value: 'Row', type: 'RO' }];
    }

    static childnoderule() {
        return {
            4: 6,
            5: 6,
            7: 8
        };
    }
}
