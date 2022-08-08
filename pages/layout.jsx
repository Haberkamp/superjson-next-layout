import Text from '../components/Text'

export const getServerSideProps = () => {
  return {
    props: {
      text: 'hi'
    }
  }
}

export default function Page() {
  return (
    <Text />
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      {page}
    </div>
  )
}