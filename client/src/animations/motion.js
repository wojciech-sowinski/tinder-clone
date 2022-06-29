export const pageContainerVariants = {
    hidden: { 
        position:'absolute',
        x:"100%",
},
    visible: {
        position:'absolute',
        x:"0",
        transition: {
            
            duration: .3
          },
    }, exit: {
        position:'absolute',
        x:"-100%",
        transition: {
            
            duration: .3,
            
          }
        
    },
    
}

export const divContainerVariants = {
    hidden: { 
        opacity:0,
        scale:.5
},
    visible: {
        opacity:1,
        scale:1,
        transition: {
            
            duration: .3
          },
    }, exit: {
        opacity:0,
        scale:.5,
        transition: {
            
            duration: .3,
            
          }
        
    },
}




