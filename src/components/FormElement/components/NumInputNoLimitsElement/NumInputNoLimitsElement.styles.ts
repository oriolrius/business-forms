import { css } from '@emotion/css';

/**
 * Styles
 */
export const getStyles = () => {
  return {
    container: css`
      display: flex;
      align-items: stretch;
    `,
    containerVertical: css`
      display: flex;
      flex-direction: column;
      align-items: stretch;
    `,
    decreaseButton: css`
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      min-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    decreaseButtonVertical: css`
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-top-left-radius: 4px !important;
      border-top-right-radius: 4px !important;
      min-height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    increaseButton: css`
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      min-height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    increaseButtonVertical: css`
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
      min-height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    input: css`
      background-color: red;
      border-radius: 0 !important;
      border-left: none !important;
      border-right: none !important;
      
      /* Target the actual input element inside the Input component */
      input {
        border-radius: 0 !important;
        text-align: center !important;
      }
    `,
    inputVertical: css`
      background-color: red;
      border-radius: 0 !important;
      border-top: none !important;
      border-bottom: none !important;
      
      /* Target the actual input element inside the Input component */
      input {
        border-radius: 0 !important;
        text-align: center !important;
      }
    `,
    inputOutOfRange: css`
      border: 3px solid red !important;
      border-left: 3px solid red !important;
      border-right: 3px solid red !important;
      
      /* Ensure the inner input element also has squared corners and centered text */
      input {
        border-radius: 0 !important;
        text-align: center !important;
      }
    `,
    inputOutOfRangeVertical: css`
      border: 3px solid red !important;
      border-top: 3px solid red !important;
      border-bottom: 3px solid red !important;
      
      /* Ensure the inner input element also has squared corners and centered text */
      input {
        border-radius: 0 !important;
        text-align: center !important;
      }
    `,
  };
};
