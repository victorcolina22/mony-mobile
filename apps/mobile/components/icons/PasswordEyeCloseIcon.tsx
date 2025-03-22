import Svg, {
  SvgProps,
  Rect,
  Defs,
  Pattern,
  Image,
  Use,
} from 'react-native-svg';

export const PasswordEyeCloseIcon = (props: SvgProps) => (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width="18" height="18" fill="url(#pattern0_874_715)" />
    <Defs>
      <Pattern
        id="pattern0_874_715"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use xlinkHref="#image0_874_715" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_874_715"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHw0lEQVR4nO2dCahVRRjHx3bbS8sWW6hISrLFjJdp583/P/e9W1nZ8oKiosx2WqBoxV5FZjuWC5FlpJmtRJqRQamF7YaVCaVBgWVlmWnu+V58OII87rtnzj3n3HvOffODwYfcO3dm/jNnlu+b7yjl8Xg8Ho/H4/F4PB6Px+PxeJKmmzHmAK31QJLnGWOuJHkdgNu3SldrrS8HMNQYc2IQBD29DAnQ0NDQXRoewE0AXgSwEMA6ku0VpFUAviI5QUQsFArHBUGwnRcqBAC9SF5K8lVpxAob3ykB+BfAdJJXBUGwnxfHMnDgwN0ADCc5N00BWF6c/0jOAHB+S0vLDl1SHABHk5woPbVWQrB0WkbyMQAHqq6A1vpYkpNsr6x147eXGTXrpZxa6z6qHiF5GIA3at3QjJ42AhhHsoeqozliVIwVUntG0nJZ8fXv3397lVe01gDwc4qN9DeA3wH8SHKx/Avgz5RXaPO01n1V3vYQJEeTbEugAdoA/ABgCoCbAZwmCwL5jXJlMMbsIfOV1vosAHeRfJPkkoREWau1vrW1tXUblXUKhcK+JL+OWeGVAF63O+5eSZZPa304yRtJvmcn7jjlnJH5ZTKAV2KMhNmyMRwyZMjO1SirHKvIvBCnAwG4W2WVYrG4ewXLWVnFvGCMOaqWZTfGDCL5TgWiLFZZRdbsEXrWJpLPB0FwqMoQJI8H8G6U+URllUKhsIvj8naunMSqDENyiCwmHOqyQGUZOVEtMypWy3G5HKOrHFAsFnck+XDIY/gGlYON4OwSYnxM8kiVQxobG0/pZLRMyMXSt6WlZVtjzLkkxwB4UoxFuSh4yGgBcBnJsSQfBTC43Oc9Ho/H4/F4PB6Px+Px1D3GmAYA460n4UNBEBxR6zLlFZIDrBn6GwCzjDHXyhGTcwYAWkvYxNcCOCfVktchWusLxRBX4sD1bSdRjDEsc9y8sqmp6aCq1KQOkLaSNuusPWWkhGZCcnKIUWZqVWpTBwB4OcRyOis0E5JzQgRpExtBVWqUY0g2Opiyv3XJaKKD6XJ+rr34UkbaRiZwh3Z8KTQzkie7OLkBuCftiuUVkg+4OEmIt0ti/lXiaAagX+q1yxn25peLO9RrUTI9hOQaB1EWirdJqjXMEeKbRnKRgxhrI7tAkRzhMuzE0S21GuYI8RsgOc2xzVoj/4D4rbq6WQK4XnVx6DhvyGRfsU+wOLSV2mWWSBuNMc2qi2KMuchxISRzy4BYP2aPUVyUXyGumKqLYYw5g+QGxza6P6ln4/uulyZzd6El/orK9eLqnEgHiuWQW6lyW8mxF/wql2pUndO42aPxH8c2+SPxm722N7jeFVwun1d1CoCh1lfZpS02ANBpFWR4xGgJZ6o6A5vDfWyK0A7DUyuMhKKIcnfQFnxEXjzeHfx7x7nW3abvUourElWMDmlasVjcR+UUrXUfG8Amct3lCD5xUWKKsSUtJVlU+aIbyWFxQ4AkKgqAK6I8Mx0KNz0Igt4q4+jNV/RmJlVvOUyMLYoNEpbEffOOoqyQu95h981rQVNT095yr8XxhKJ6IyWiGG2VCAfgF7nmlgVhmpub95fLOOVs4DUTJaoY8nlZm8eozDIAD9bCgUIizJF8Wo7EKyz7crlraMN6uH5nqrMolYix5btybALg+xi9Z5MY/mXeSjNeopwk2DO6BTF7/HyJDrFF2MRFsSH2KhJjC0EQ7Cp30BMY2psAfEFypFxTlkdKpQKIMQjAxSSfdTQghdZdnAg7PmorEGVSWKHXxRFja4wxF7ief0VISwF8JBURoSQSqV2SD9NaXwLgGmPMHeJpKcEzSX6ZQnSg3ySoTWf1jiqKlLtkRjZqjpMY0giOPbOnbbz2OkhtAJ4bNGjQXmH1jijKB50JMj5JMTrkPdg+ftrzmAB8HvUqdARRFnXWaLekIUYHu8q8WjcuIybr7lnRWZyjKDNLflni11qrX+JiCABOqnXjsrJ0b5x6O4hydqdflrOmEkaXtZ1OPBGIGGWnPStJOqns3mPWvR/Jnzp2cifvEztS5PE1VlYxxpiDVQLWNYfKb7Axq9ZUsbFX241d2GdHxm0D2Q5Ye9IYkvfV1MnQ0SY/QT4rEeVseKTHSX6W5JmSLOslOI70TJmkxR3HxmUJ++7Kugns7+gFvl68JVUJgiDYCcAJEvxFjle22l+E5fkJgGcA3CYXjYwxx4iRqcRPdHOxdQB4RNUDpcI1lajsuCh5aq37huUZxftFNnqOJulEg3JWHQAFRz/X3rUURLCPxzBRnlB5Rh4bDoKMjpqvTkEQrfXpLp0nt4H6rUdfKhXUKQgikPzQYZQ8pfKIyyNADEKV5K1TEsTlESsLkKxFUw1Flq0OYqySSNhZEsR1lMgeTeUJCRXu0NNGVZq/TlcQl2X6X7nyNQs7RLTHMz2yKIjrRrZaIdETwb6NIDW3fJ2yIA5HPUtUvcwh4h0fBMGeWRZEIPlWmfzvVHlD5oiO9nnrj3Vq3Lx1dQTpQfLTEnlPyu17EOUetqzbbYiJEUm9M1BXQRBBGl7eKmrf3DYqic5Ul2iHNzHU7RvWskiw2dVoQ7nNm78/X2UATCkzQiZXuzxdHpI9Stkx5P/imlw9FdLQ0NBdXtktbpmS5O8sOG57PB6Px+PxeDwej8oR/wMnhniZEZtnGgAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
