import { styled } from "config/theme";

export const ChatInputContainer = styled('div',{
  borderTop: '1px solid $primary600',
  display: 'flex',
  height:'120px',
  alignItems: 'flex-end',
})

export const ButtonContainer = styled('div',{
  display: 'flex',
  justifyContent:'flex-end',
  gap: '10px',
  padding:'10px'
})

export const StyledTextArea = styled('textarea', {
  alignSelf: 'stretch',
  fontFamily: '$loopless',
  fontSize: '$16',
  color: '$primary200',
  border: 'none',
  padding: '5px 10px',
  resize: 'none',
  backgroundColor: '$primary900',
  flexGrow:1,

  '@md': {
    fontSize: '$14',
  },

  '&:focus': {
    outline: 'none',
  },

  '&::-webkit-input-placeholder': {
    color: '$primary600',
  },

  '&:-ms-input-placeholder': {
    color: '$primary600',
  },
})