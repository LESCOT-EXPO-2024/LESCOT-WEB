interface Pais {
    nombre: string;
    bandera: string;
    lengua: string;
    continente: string;
  }
  
  const paises: Pais[] = [
    {
      "nombre": "Antigua y Barbuda",
      "bandera": "https://flagcdn.com/w640/ag.webp",
      "lengua": "Lengua de Señas de Antigua y Barbuda",
      "continente": "América del Norte"
    },
    {
      "nombre": "Argentina",
      "bandera": "https://flagcdn.com/w640/ar.webp",
      "lengua": "Lengua de Señas Argentina (LSA)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Bahamas",
      "bandera": "https://flagcdn.com/w640/bs.webp",
      "lengua": "Lengua de Señas de Bahamas (BSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Barbados",
      "bandera": "https://flagcdn.com/w640/bb.webp",
      "lengua": "Lengua de Señas de Barbados (BBSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Belice",
      "bandera": "https://flagcdn.com/w640/bz.webp",
      "lengua": "Lengua de Señas de Belice (BZSL)",
      "continente": "América Central"
    },
    {
      "nombre": "Bolivia",
      "bandera": "https://flagcdn.com/w640/bo.webp",
      "lengua": "Lengua de Señas Boliviana (LSB)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Brasil",
      "bandera": "https://flagcdn.com/w640/br.webp",
      "lengua": "Lengua Brasileña de Señas (LIBRAS)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Canadá",
      "bandera": "https://flagcdn.com/w640/ca.webp",
      "lengua": "Lengua de Señas Canadiense (ASL/LSQ)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Chile",
      "bandera": "https://flagcdn.com/w640/cl.webp",
      "lengua": "Lengua de Señas Chilena (LSCh)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Colombia",
      "bandera": "https://flagcdn.com/w640/co.webp",
      "lengua": "Lengua de Señas Colombiana (LSC)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Costa Rica",
      "bandera": "https://flagcdn.com/w640/cr.webp",
      "lengua": "Lengua de Señas Costarricense (LESCO)",
      "continente": "América Central"
    },
    {
      "nombre": "Cuba",
      "bandera": "https://flagcdn.com/w640/cu.webp",
      "lengua": "Lengua de Señas Cubana (LSC)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Dominica",
      "bandera": "https://flagcdn.com/w640/dm.webp",
      "lengua": "Lengua de Señas de Dominica (DSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Ecuador",
      "bandera": "https://flagcdn.com/w640/ec.webp",
      "lengua": "Lengua de Señas Ecuatoriana (LSE)",
      "continente": "América del Sur"
    },
    {
      "nombre": "El Salvador",
      "bandera": "https://flagcdn.com/w640/sv.webp",
      "lengua": "Lengua de Señas Salvadoreña (LESSA)",
      "continente": "América Central"
    },
    {
      "nombre": "Estados Unidos",
      "bandera": "https://flagcdn.com/w640/us.webp",
      "lengua": "Lengua de Señas Americana (ASL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Guatemala",
      "bandera": "https://flagcdn.com/w640/gt.webp",
      "lengua": "Lengua de Señas Guatemalteca (LSG)",
      "continente": "América Central"
    },
    {
      "nombre": "Guyana",
      "bandera": "https://flagcdn.com/w640/gy.webp",
      "lengua": "Lengua de Señas de Guyana (GSL)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Haití",
      "bandera": "https://flagcdn.com/w640/ht.webp",
      "lengua": "Lengua de Señas Haitiana (LSH)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Honduras",
      "bandera": "https://flagcdn.com/w640/hn.webp",
      "lengua": "Lengua de Señas Hondureña (LESHO)",
      "continente": "América Central"
    },
    {
      "nombre": "Jamaica",
      "bandera": "https://flagcdn.com/w640/jm.webp",
      "lengua": "Lengua de Señas de Jamaica (JSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "México",
      "bandera": "https://flagcdn.com/w640/mx.webp",
      "lengua": "Lengua de Señas Mexicana (LSM)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Nicaragua",
      "bandera": "https://flagcdn.com/w640/ni.webp",
      "lengua": "Lengua de Señas de Nicaragua (LSN)",
      "continente": "América Central"
    },
    {
      "nombre": "Panamá",
      "bandera": "https://flagcdn.com/w640/pa.webp",
      "lengua": "Lengua de Señas Panameña (LSP)",
      "continente": "América Central"
    },
    {
      "nombre": "Paraguay",
      "bandera": "https://flagcdn.com/w640/py.webp",
      "lengua": "Lengua de Señas Paraguaya (LSP)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Perú",
      "bandera": "https://flagcdn.com/w640/pe.webp",
      "lengua": "Lengua de Señas Peruana (LSP)",
      "continente": "América del Sur"
    },
    {
      "nombre": "República Dominicana",
      "bandera": "https://flagcdn.com/w640/do.webp",
      "lengua": "Lengua de Señas Dominicana (LSRD)",
      "continente": "América del Norte"
    },
    {
      "nombre": "San Cristóbal y Nieves",
      "bandera": "https://flagcdn.com/w640/kn.webp",
      "lengua": "Lengua de Señas de San Cristóbal y Nieves (SKNSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "San Vicente y las Granadinas",
      "bandera": "https://flagcdn.com/w640/vc.webp",
      "lengua": "Lengua de Señas de San Vicente y las Granadinas (SVLSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Santa Lucía",
      "bandera": "https://flagcdn.com/w640/lc.webp",
      "lengua": "Lengua de Señas de Santa Lucía (SLDSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Surinam",
      "bandera": "https://flagcdn.com/w640/sr.webp",
      "lengua": "Lengua de Señas de Surinam (SLDS)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Trinidad y Tobago",
      "bandera": "https://flagcdn.com/w640/tt.webp",
      "lengua": "Lengua de Señas de Trinidad y Tobago (TTSL)",
      "continente": "América del Norte"
    },
    {
      "nombre": "Uruguay",
      "bandera": "https://flagcdn.com/w640/uy.webp",
      "lengua": "Lengua de Señas Uruguaya (LSU)",
      "continente": "América del Sur"
    },
    {
      "nombre": "Venezuela",
      "bandera": "https://flagcdn.com/w640/ve.webp",
      "lengua": "Lengua de Señas Venezolana (LSV)",
      "continente": "América del Sur"
    },
    {
        "nombre": "Albania",
        "bandera": "https://flagcdn.com/w640/al.webp",
        "lengua": "Lengua de Señas Albanesa (LSA)",
        "continente": "Europa"
      },
      {
        "nombre": "Alemania",
        "bandera": "https://flagcdn.com/w640/de.webp",
        "lengua": "Lengua de Señas Alemana (DGS)",
        "continente": "Europa"
      },
      {
        "nombre": "Andorra",
        "bandera": "https://flagcdn.com/w640/ad.webp",
        "lengua": "Lengua de Signos Catalana (LSC)",
        "continente": "Europa"
      },
      {
        "nombre": "Armenia",
        "bandera": "https://flagcdn.com/w640/am.webp",
        "lengua": "Lengua de Señas Armenia (ASL)",
        "continente": "Europa"
      },
      {
        "nombre": "Austria",
        "bandera": "https://flagcdn.com/w640/at.webp",
        "lengua": "Österreichische Gebärdensprache (ÖGS)",
        "continente": "Europa"
      },
      {
        "nombre": "Azerbaiyán",
        "bandera": "https://flagcdn.com/w640/az.webp",
        "lengua": "Azerbaijani Sign Language (AzSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Bielorrusia",
        "bandera": "https://flagcdn.com/w640/by.webp",
        "lengua": "Lengua de Señas Bielorrusa (BSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Bélgica",
        "bandera": "https://flagcdn.com/w640/be.webp",
        "lengua": "Vlaamse Gebarentaal (VGT)",
        "continente": "Europa"
      },
      {
        "nombre": "Bosnia y Herzegovina",
        "bandera": "https://flagcdn.com/w640/ba.webp",
        "lengua": "Bosnian Sign Language (BSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Bulgaria",
        "bandera": "https://flagcdn.com/w640/bg.webp",
        "lengua": "Bulgarian Sign Language (BGS)",
        "continente": "Europa"
      },
      {
        "nombre": "Croacia",
        "bandera": "https://flagcdn.com/w640/hr.webp",
        "lengua": "Croatian Sign Language (HR SL)",
        "continente": "Europa"
      },
      {
        "nombre": "Chipre",
        "bandera": "https://flagcdn.com/w640/cy.webp",
        "lengua": "Cyprus Sign Language (CySL)",
        "continente": "Europa"
      },
      {
        "nombre": "Dinamarca",
        "bandera": "https://flagcdn.com/w640/dk.webp",
        "lengua": "Dansk Tegnsprog (DTS)",
        "continente": "Europa"
      },
      {
        "nombre": "Eslovaquia",
        "bandera": "https://flagcdn.com/w640/sk.webp",
        "lengua": "Slovak Sign Language (SLS)",
        "continente": "Europa"
      },
      {
        "nombre": "Eslovenia",
        "bandera": "https://flagcdn.com/w640/si.webp",
        "lengua": "Slovenski Znakovni Jezik (SZJ)",
        "continente": "Europa"
      },
      {
        "nombre": "España",
        "bandera": "https://flagcdn.com/w640/es.webp",
        "lengua": "Lengua de Signos Española (LSE)",
        "continente": "Europa"
      },
      {
        "nombre": "Estonia",
        "bandera": "https://flagcdn.com/w640/ee.webp",
        "lengua": "Estonian Sign Language (ESL)",
        "continente": "Europa"
      },
      {
        "nombre": "Finlandia",
        "bandera": "https://flagcdn.com/w640/fi.webp",
        "lengua": "Suomalainen Viittomakieli (FSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Francia",
        "bandera": "https://flagcdn.com/w640/fr.webp",
        "lengua": "Langue des signes française (LSF)",
        "continente": "Europa"
      },
      {
        "nombre": "Georgia",
        "bandera": "https://flagcdn.com/w640/ge.webp",
        "lengua": "Georgian Sign Language (GSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Grecia",
        "bandera": "https://flagcdn.com/w640/gr.webp",
        "lengua": "Greek Sign Language (GSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Hungría",
        "bandera": "https://flagcdn.com/w640/hu.webp",
        "lengua": "Hungarian Sign Language (HSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Irlanda",
        "bandera": "https://flagcdn.com/w640/ie.webp",
        "lengua": "Irish Sign Language (ISL)",
        "continente": "Europa"
      },
      {
        "nombre": "Islandia",
        "bandera": "https://flagcdn.com/w640/is.webp",
        "lengua": "Íslenskt Táknmál (IST)",
        "continente": "Europa"
      },
      {
        "nombre": "Italia",
        "bandera": "https://flagcdn.com/w640/it.webp",
        "lengua": "Lingua dei segni italiana (LIS)",
        "continente": "Europa"
      },
      {
        "nombre": "Kosovo",
        "bandera": "https://flagcdn.com/w640/xk.webp",
        "lengua": "Kosovan Sign Language (KoSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Letonia",
        "bandera": "https://flagcdn.com/w640/lv.webp",
        "lengua": "Latvian Sign Language (LVSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Liechtenstein",
        "bandera": "https://flagcdn.com/w640/li.webp",
        "lengua": "Lengua de Señas de Liechtenstein (LSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Lituania",
        "bandera": "https://flagcdn.com/w640/lt.webp",
        "lengua": "Lithuanian Sign Language (LSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Luxemburgo",
        "bandera": "https://flagcdn.com/w640/lu.webp",
        "lengua": "Luxembourgish Sign Language (LgSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Malta",
        "bandera": "https://flagcdn.com/w640/mt.webp",
        "lengua": "Maltese Sign Language (LSM)",
        "continente": "Europa"
      },
      {
        "nombre": "Moldavia",
        "bandera": "https://flagcdn.com/w640/md.webp",
        "lengua": "Moldovan Sign Language (MoSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Mónaco",
        "bandera": "https://flagcdn.com/w640/mc.webp",
        "lengua": "Langue des signes monégasque (LSM)",
        "continente": "Europa"
      },
      {
        "nombre": "Montenegro",
        "bandera": "https://flagcdn.com/w640/me.webp",
        "lengua": "Montenegrin Sign Language (MgSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Noruega",
        "bandera": "https://flagcdn.com/w640/no.webp",
        "lengua": "Norsk Tegnspråk (NST)",
        "continente": "Europa"
      },
      {
        "nombre": "Países Bajos",
        "bandera": "https://flagcdn.com/w640/nl.webp",
        "lengua": "Nederlandse Gebarentaal (NGT)",
        "continente": "Europa"
      },
      {
        "nombre": "Polonia",
        "bandera": "https://flagcdn.com/w640/pl.webp",
        "lengua": "Polski Język Migowy (PJMiG)",
        "continente": "Europa"
      },
      {
        "nombre": "Portugal",
        "bandera": "https://flagcdn.com/w640/pt.webp",
        "lengua": "Língua Gestual Portuguesa (LGP)",
        "continente": "Europa"
      },
      {
        "nombre": "Reino Unido",
        "bandera": "https://flagcdn.com/w640/gb.webp",
        "lengua": "British Sign Language (BSL)",
        "continente": "Europa"
      },
      {
        "nombre": "República Checa",
        "bandera": "https://flagcdn.com/w640/cz.webp",
        "lengua": "Czech Sign Language (CzSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Rumania",
        "bandera": "https://flagcdn.com/w640/ro.webp",
        "lengua": "Lengua de Señas Rumana (LSR)",
        "continente": "Europa"
      },
      {
        "nombre": "Rusia",
        "bandera": "https://flagcdn.com/w640/ru.webp",
        "lengua": "Russian Sign Language (RSL)",
        "continente": "Europa"
      },
      {
        "nombre": "San Marino",
        "bandera": "https://flagcdn.com/w640/sm.webp",
        "lengua": "Sanmarinese Sign Language (SgSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Serbia",
        "bandera": "https://flagcdn.com/w640/rs.webp",
        "lengua": "Serbian Sign Language (SrSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Suecia",
        "bandera": "https://flagcdn.com/w640/se.webp",
        "lengua": "Svenskt Teckenspråk (STS)",
        "continente": "Europa"
      },
      {
        "nombre": "Suiza",
        "bandera": "https://flagcdn.com/w640/ch.webp",
        "lengua": "Swiss-German Sign Language (Deutschschweizer Gebärdensprache)",
        "continente": "Europa"
      },
      {
        "nombre": "Turquía",
        "bandera": "https://flagcdn.com/w640/tr.webp",
        "lengua": "Turkish Sign Language (TİD)",
        "continente": "Europa"
      },
      {
        "nombre": "Ucrania",
        "bandera": "https://flagcdn.com/w640/ua.webp",
        "lengua": "Ukrainian Sign Language (UKSL)",
        "continente": "Europa"
      },
      {
        "nombre": "Vaticano",
        "bandera": "https://flagcdn.com/w640/va.webp",
        "lengua": "Lingua dei Segni Vaticana (LSV)",
        "continente": "Europa"
      },
      {
        "nombre": "Afganistán",
        "bandera": "https://flagcdn.com/w640/af.webp",
        "lengua": "Lengua de Señas de Afganistán (AFSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Arabia Saudita",
        "bandera": "https://flagcdn.com/w640/sa.webp",
        "lengua": "Saudi Sign Language (SgSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Bangladés",
        "bandera": "https://flagcdn.com/w640/bd.webp",
        "lengua": "Bangladeshi Sign Language (BdSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Baréin",
        "bandera": "https://flagcdn.com/w640/bh.webp",
        "lengua": "Bahraini Sign Language (BhSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Birmania (Myanmar)",
        "bandera": "https://flagcdn.com/w640/mm.webp",
        "lengua": "Myanmar Sign Language (MSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Bután",
        "bandera": "https://flagcdn.com/w640/bt.webp",
        "lengua": "Bhutanese Sign Language (BTSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Brunéi",
        "bandera": "https://flagcdn.com/w640/bn.webp",
        "lengua": "Brunei Sign Language (BnSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Camboya",
        "bandera": "https://flagcdn.com/w640/kh.webp",
        "lengua": "Cambodian Sign Language (CSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Catar",
        "bandera": "https://flagcdn.com/w640/qa.webp",
        "lengua": "Qatari Sign Language (QaSL)",
        "continente": "Asia"
      },
      {
        "nombre": "China",
        "bandera": "https://flagcdn.com/w640/cn.webp",
        "lengua": "Chinese Sign Language (CSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Corea del Norte",
        "bandera": "https://flagcdn.com/w640/kp.webp",
        "lengua": "Korean Sign Language (KSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Corea del Sur",
        "bandera": "https://flagcdn.com/w640/kr.webp",
        "lengua": "Korean Sign Language (KSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Emiratos Árabes Unidos",
        "bandera": "https://flagcdn.com/w640/ae.webp",
        "lengua": "Emirati Sign Language (EmSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Filipinas",
        "bandera": "https://flagcdn.com/w640/ph.webp",
        "lengua": "Filipino Sign Language (FSL)",
        "continente": "Asia"
      },
      {
        "nombre": "India",
        "bandera": "https://flagcdn.com/w640/in.webp",
        "lengua": "Indian Sign Language (ISL)",
        "continente": "Asia"
      },
      {
        "nombre": "Indonesia",
        "bandera": "https://flagcdn.com/w640/id.webp",
        "lengua": "Bahasa Isyarat Indonesia (BISINDO)",
        "continente": "Asia"
      },
      {
        "nombre": "Irak",
        "bandera": "https://flagcdn.com/w640/iq.webp",
        "lengua": "Iraqi Sign Language (ISL)",
        "continente": "Asia"
      },
      {
        "nombre": "Irán",
        "bandera": "https://flagcdn.com/w640/ir.webp",
        "lengua": "Persian Sign Language (PSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Israel",
        "bandera": "https://flagcdn.com/w640/il.webp",
        "lengua": "Israeli Sign Language (ISL)",
        "continente": "Asia"
      },
      {
        "nombre": "Japón",
        "bandera": "https://flagcdn.com/w640/jp.webp",
        "lengua": "Japanese Sign Language (JSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Jordania",
        "bandera": "https://flagcdn.com/w640/jo.webp",
        "lengua": "Jordanian Sign Language (JoSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Kazajistán",
        "bandera": "https://flagcdn.com/w640/kz.webp",
        "lengua": "Kazakh Sign Language (KSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Kirguistán",
        "bandera": "https://flagcdn.com/w640/kg.webp",
        "lengua": "Kyrgyz Sign Language (KgSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Kuwait",
        "bandera": "https://flagcdn.com/w640/kw.webp",
        "lengua": "Kuwaiti Sign Language (KwSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Laos",
        "bandera": "https://flagcdn.com/w640/la.webp",
        "lengua": "Laos Sign Language (LSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Líbano",
        "bandera": "https://flagcdn.com/w640/lb.webp",
        "lengua": "Lebanese Sign Language (LbSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Malasia",
        "bandera": "https://flagcdn.com/w640/my.webp",
        "lengua": "Malaysian Sign Language (MySL)",
        "continente": "Asia"
      },
      {
        "nombre": "Maldivas",
        "bandera": "https://flagcdn.com/w640/mv.webp",
        "lengua": "Maldivian Sign Language (MVSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Mongolia",
        "bandera": "https://flagcdn.com/w640/mn.webp",
        "lengua": "Mongolian Sign Language (MoSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Nepal",
        "bandera": "https://flagcdn.com/w640/np.webp",
        "lengua": "Nepali Sign Language (NpSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Omán",
        "bandera": "https://flagcdn.com/w640/om.webp",
        "lengua": "Omani Sign Language (OgSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Pakistán",
        "bandera": "https://flagcdn.com/w640/pk.webp",
        "lengua": "Pakistani Sign Language (PSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Palestina",
        "bandera": "https://flagcdn.com/w640/ps.webp",
        "lengua": "Palestinian Sign Language (PsSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Singapur",
        "bandera": "https://flagcdn.com/w640/sg.webp",
        "lengua": "Singaporean Sign Language (SgSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Siria",
        "bandera": "https://flagcdn.com/w640/sy.webp",
        "lengua": "Syrian Sign Language (SySL)",
        "continente": "Asia"
      },
      {
        "nombre": "Sri Lanka",
        "bandera": "https://flagcdn.com/w640/lk.webp",
        "lengua": "Sri Lankan Sign Language (SLnSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Tailandia",
        "bandera": "https://flagcdn.com/w640/th.webp",
        "lengua": "Thai Sign Language (TSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Taiwán",
        "bandera": "https://flagcdn.com/w640/tw.webp",
        "lengua": "Taiwanese Sign Language (TSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Tayikistán",
        "bandera": "https://flagcdn.com/w640/tj.webp",
        "lengua": "Tajik Sign Language (TjSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Timor Oriental",
        "bandera": "https://flagcdn.com/w640/tl.webp",
        "lengua": "Tetun Sign Language (Tetun SL)",
        "continente": "Asia"
      },
      {
        "nombre": "Turkmenistán",
        "bandera": "https://flagcdn.com/w640/tm.webp",
        "lengua": "Turkmen Sign Language (TmSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Turquía",
        "bandera": "https://flagcdn.com/w640/tr.webp",
        "lengua": "Turkish Sign Language (TİD)",
        "continente": "Asia"
      },
      {
        "nombre": "Uzbekistán",
        "bandera": "https://flagcdn.com/w640/uz.webp",
        "lengua": "Uzbek Sign Language (UzSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Vietnam",
        "bandera": "https://flagcdn.com/w640/vn.webp",
        "lengua": "Vietnamese Sign Language (VSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Yemen",
        "bandera": "https://flagcdn.com/w640/ye.webp",
        "lengua": "Yemeni Sign Language (YmSL)",
        "continente": "Asia"
      },
      {
        "nombre": "Angola",
        "bandera": "https://flagcdn.com/w640/ao.webp",
        "lengua": "Língua gestual angolana (LGAN)",
        "continente": "África"
      },
      {
        "nombre": "Argelia",
        "bandera": "https://flagcdn.com/w640/dz.webp",
        "lengua": "Algerian Sign Language (AlSL)",
        "continente": "África"
      },
      {
        "nombre": "Benín",
        "bandera": "https://flagcdn.com/w640/bj.webp",
        "lengua": "Langue des signes béninoise (LSB)",
        "continente": "África"
      },
      {
        "nombre": "Botsuana",
        "bandera": "https://flagcdn.com/w640/bw.webp",
        "lengua": "Botswana Sign Language (BoSL)",
        "continente": "África"
      },
      {
        "nombre": "Burkina Faso",
        "bandera": "https://flagcdn.com/w640/bf.webp",
        "lengua": "Langue des signes voltaïque (LSV)",
        "continente": "África"
      },
      {
        "nombre": "Burundi",
        "bandera": "https://flagcdn.com/w640/bi.webp",
        "lengua": "Burundian Sign Language (BuSL)",
        "continente": "África"
      },
      {
        "nombre": "Cabo Verde",
        "bandera": "https://flagcdn.com/w640/cv.webp",
        "lengua": "Cabo Verdean Sign Language (CvSL)",
        "continente": "África"
      },
      {
        "nombre": "Camerún",
        "bandera": "https://flagcdn.com/w640/cm.webp",
        "lengua": "Cameroonian Sign Language (CmSL)",
        "continente": "África"
      },
      {
        "nombre": "Chad",
        "bandera": "https://flagcdn.com/w640/td.webp",
        "lengua": "Chadian Sign Language (ChSL)",
        "continente": "África"
      },
      {
        "nombre": "Comoras",
        "bandera": "https://flagcdn.com/w640/km.webp",
        "lengua": "Comorian Sign Language (ComSL)",
        "continente": "África"
      },
      {
        "nombre": "Costa de Marfil",
        "bandera": "https://flagcdn.com/w640/ci.webp",
        "lengua": "Langue des signes ivoirienne (LSI)",
        "continente": "África"
      },
      {
        "nombre": "Djibouti",
        "bandera": "https://flagcdn.com/w640/dj.webp",
        "lengua": "Djiboutian Sign Language (DjSL)",
        "continente": "África"
      },
      {
        "nombre": "Egipto",
        "bandera": "https://flagcdn.com/w640/eg.webp",
        "lengua": "Egyptian Sign Language (EGSL)",
        "continente": "África"
      },
      {
        "nombre": "Eritrea",
        "bandera": "https://flagcdn.com/w640/er.webp",
        "lengua": "Eritrean Sign Language (ErSL)",
        "continente": "África"
      },
      {
        "nombre": "Etiopía",
        "bandera": "https://flagcdn.com/w640/et.webp",
        "lengua": "Ethiopian Sign Language (EtSL)",
        "continente": "África"
      },
      {
        "nombre": "Gabón",
        "bandera": "https://flagcdn.com/w640/ga.webp",
        "lengua": "Gabonese Sign Language (GaSL)",
        "continente": "África"
      },
      {
        "nombre": "Gambia",
        "bandera": "https://flagcdn.com/w640/gm.webp",
        "lengua": "Gambian Sign Language (GMnSL)",
        "continente": "África"
      },
      {
        "nombre": "Ghana",
        "bandera": "https://flagcdn.com/w640/gh.webp",
        "lengua": "Ghanaian Sign Language (GhSL)",
        "continente": "África"
      },
      {
        "nombre": "Guinea",
        "bandera": "https://flagcdn.com/w640/gn.webp",
        "lengua": "Guinean Sign Language (GnSL)",
        "continente": "África"
      },
      {
        "nombre": "Guinea-Bisáu",
        "bandera": "https://flagcdn.com/w640/gw.webp",
        "lengua": "Guinea-Bissau Sign Language (GwSL)",
        "continente": "África"
      },
      {
        "nombre": "Guinea Ecuatorial",
        "bandera": "https://flagcdn.com/w640/gq.webp",
        "lengua": "Equatoguinean Sign Language (EqSL)",
        "continente": "África"
      },
      {
        "nombre": "Kenia",
        "bandera": "https://flagcdn.com/w640/ke.webp",
        "lengua": "Kenyan Sign Language (KeSL)",
        "continente": "África"
      },
      {
        "nombre": "Lesoto",
        "bandera": "https://flagcdn.com/w640/ls.webp",
        "lengua": "Lesotho Sign Language (LSL)",
        "continente": "África"
      },
      {
        "nombre": "Liberia",
        "bandera": "https://flagcdn.com/w640/lr.webp",
        "lengua": "Liberian Sign Language (LSL)",
        "continente": "África"
      },
      {
        "nombre": "Libia",
        "bandera": "https://flagcdn.com/w640/ly.webp",
        "lengua": "Libyan Sign Language (LySL)",
        "continente": "África"
      },
      {
        "nombre": "Madagascar",
        "bandera": "https://flagcdn.com/w640/mg.webp",
        "lengua": "Malagasy Sign Language (MGSL)",
        "continente": "África"
      },
      {
        "nombre": "Malawi",
        "bandera": "https://flagcdn.com/w640/mw.webp",
        "lengua": "Malawian Sign Language (MWL)",
        "continente": "África"
      },
      {
        "nombre": "Malí",
        "bandera": "https://flagcdn.com/w640/ml.webp",
        "lengua": "Malian Sign Language (MLSL)",
        "continente": "África"
      },
      {
        "nombre": "Marruecos",
        "bandera": "https://flagcdn.com/w640/ma.webp",
        "lengua": "Moroccan Sign Language (MaSL)",
        "continente": "África"
      },
      {
        "nombre": "Mauricio",
        "bandera": "https://flagcdn.com/w640/mu.webp",
        "lengua": "Mauritian Sign Language (MuSL)",
        "continente": "África"
      },
      {
        "nombre": "Mauritania",
        "bandera": "https://flagcdn.com/w640/mr.webp",
        "lengua": "Mauritanian Sign Language (MrSL)",
        "continente": "África"
      },
      {
        "nombre": "Mozambique",
        "bandera": "https://flagcdn.com/w640/mz.webp",
        "lengua": "Mozambican Sign Language (MzSL)",
        "continente": "África"
      },
      {
        "nombre": "Namibia",
        "bandera": "https://flagcdn.com/w640/na.webp",
        "lengua": "Namibian Sign Language (NaSL)",
        "continente": "África"
      },
      {
        "nombre": "Níger",
        "bandera": "https://flagcdn.com/w640/ne.webp",
        "lengua": "Nigerian Sign Language (NeSL)",
        "continente": "África"
      },
      {
        "nombre": "Nigeria",
        "bandera": "https://flagcdn.com/w640/ng.webp",
        "lengua": "Nigerien Sign Language (NigSL)",
        "continente": "África"
      },
      {
        "nombre": "República Centroafricana",
        "bandera": "https://flagcdn.com/w640/cf.webp",
        "lengua": "Central African Sign Language (CfSL)",
        "continente": "África"
      },
      {
        "nombre": "República del Congo",
        "bandera": "https://flagcdn.com/w640/cg.webp",
        "lengua": "Congolese Sign Language (CgSL)",
        "continente": "África"
      },
      {
        "nombre": "República Democrática del Congo",
        "bandera": "https://flagcdn.com/w640/cd.webp",
        "lengua": "Congolese Sign Language (CgSL)",
        "continente": "África"
      },
      {
        "nombre": "Ruanda",
        "bandera": "https://flagcdn.com/w640/rw.webp",
        "lengua": "Rwandan Sign Language (RwSL)",
        "continente": "África"
      },
      {
        "nombre": "Santo Tomé y Príncipe",
        "bandera": "https://flagcdn.com/w640/st.webp",
        "lengua": "São Toméan Sign Language (STSL)",
        "continente": "África"
      },
      {
        "nombre": "Senegal",
        "bandera": "https://flagcdn.com/w640/sn.webp",
        "lengua": "Senegalese Sign Language (SnSL)",
        "continente": "África"
      },
      {
        "nombre": "Seychelles",
        "bandera": "https://flagcdn.com/w640/sc.webp",
        "lengua": "Seychellois Sign Language (ScSL)",
        "continente": "África"
      },
      {
        "nombre": "Sierra Leona",
        "bandera": "https://flagcdn.com/w640/sl.webp",
        "lengua": "Sierra Leonean Sign Language (SiSL)",
        "continente": "África"
      },
      {
        "nombre": "Somalia",
        "bandera": "https://flagcdn.com/w640/so.webp",
        "lengua": "Somali Sign Language (SoSL)",
        "continente": "África"
      },
      {
        "nombre": "Sudáfrica",
        "bandera": "https://flagcdn.com/w640/za.webp",
        "lengua": "South African Sign Language (SASL)",
        "continente": "África"
      },
      {
        "nombre": "Sudán",
        "bandera": "https://flagcdn.com/w640/sd.webp",
        "lengua": "Sudanese Sign Language (SdSL)",
        "continente": "África"
      },
      {
        "nombre": "Sudán del Sur",
        "bandera": "https://flagcdn.com/w640/ss.webp",
        "lengua": "South Sudanese Sign Language (SSSL)",
        "continente": "África"
      },
      {
        "nombre": "Suazilandia",
        "bandera": "https://flagcdn.com/w640/sz.webp",
        "lengua": "Swazi Sign Language (SwSL)",
        "continente": "África"
      },
      {
        "nombre": "Tanzania",
        "bandera": "https://flagcdn.com/w640/tz.webp",
        "lengua": "Tanzanian Sign Language (TzSL)",
        "continente": "África"
      },
      {
        "nombre": "Togo",
        "bandera": "https://flagcdn.com/w640/tg.webp",
        "lengua": "Togolese Sign Language (TgSL)",
        "continente": "África"
      },
      {
        "nombre": "Túnez",
        "bandera": "https://flagcdn.com/w640/tn.webp",
        "lengua": "Tunisian Sign Language (TnSL)",
        "continente": "África"
      },
      {
        "nombre": "Uganda",
        "bandera": "https://flagcdn.com/w640/ug.webp",
        "lengua": "Ugandan Sign Language (UgSL)",
        "continente": "África"
      },
      {
        "nombre": "Yibuti",
        "bandera": "https://flagcdn.com/w640/yt.webp",
        "lengua": "Djiboutian Sign Language (DjSL)",
        "continente": "África"
      },
      {
        "nombre": "Zambia",
        "bandera": "https://flagcdn.com/w640/zm.webp",
        "lengua": "Zambian Sign Language (ZmSL)",
        "continente": "África"
      },
      {
        "nombre": "Zimbabue",
        "bandera": "https://flagcdn.com/w640/zw.webp",
        "lengua": "Zimbabwe Sign Language (ZwSL)",
        "continente": "África"
      },
    
  ];
  
  export default paises;
  