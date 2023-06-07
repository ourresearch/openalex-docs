import {
    createIntegration,
    createComponent,
    FetchEventCallback,
    RuntimeContext,
  } from "@gitbook/runtime";
  
  type IntegrationContext = {} & RuntimeContext;
  type IntegrationBlockProps = { url: string };
  type IntegrationBlockState = { url: string };
  // type IntegrationBlockState = {};
  type IntegrationAction = { action: "@link.unfurl" | "clicked", url: string };
  
  const handleFetchEvent: FetchEventCallback<IntegrationContext> = async (
    request,
    context
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { api } = context;
    const user = api.user.getAuthenticatedUser();
  
    return new Response(JSON.stringify(user));
  };
  
  const exampleBlock = createComponent<
     IntegrationBlockProps,
     IntegrationBlockState,
     IntegrationAction,
     IntegrationContext
  >({
    componentId: "test-integration",
    initialState: (props) => {
      return {
        url: props.url,
      };
    },
    action: async (element, action, context) => {
      switch (action.action) {
        case "@link.unfurl":
          const { url } = action;
          console.log("@link.unfurl -- url: " + url);
          element.props.url = url;
          return {};
        case "clicked":
          element.state.url = element.props.url;
          return {};
      }
    },
    render: async (element, context) => {
      return (
        <block>
          {element.state.url ? (
            <webframe
              source={{ url: element.props.url }}
              aspectRatio={16 / 9}
            />
          ) : (
            <button label="Click to see" onPress={{ action: 'clicked' }} />
          )}
        </block>
      );
    },
  });
  
  export default createIntegration({
    fetch: handleFetchEvent,
    components: [exampleBlock],
    events: {},
  });
