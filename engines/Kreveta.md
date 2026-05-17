# Engine: Kreveta

Author: Daniel Michna

Home: https://github.com/ZlomenyMesic/Kreveta

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-05-12 | 2017<sub>(+80) | 2282<sub>(+72) | 2352<sub>(+57) |  |
| 2.3.0 | 2026-04-20 | 1937<sub>(+150) | 2210<sub>(-7) | 2295<sub>(+28) |  |
| 2.2.5 | 2026-03-15 | 1787<sub>(+27) | 2217<sub>(+65) | 2267<sub>(+37) |  |
| 2.2.4 | 2026-03-05 | 1760<sub>(-88) | 2152<sub>(-11) | 2230<sub>(-30) |  |
| 2.2.3 | 2026-02-05 | 1848<sub>(+40) | 2163<sub>(+48) | 2260<sub>(-8) |  |
| 2.2.2 | 2026-01-13 | 1808<sub>(+183) | 2115<sub>(+89) | 2268<sub>(+130) |  |
| 2.2.1 | 2025-12-25 | 1625<sub>(-44) | 2026<sub>(+52) | 2138<sub>(+21) |  |
| 2.2.0 | 2025-12-23 | 1669<sub>(+22) | 1974<sub>(+49) | 2117<sub>(+84) |  |
| 2.0.0 | 2025-12-01 | 1647<sub>(+109) | 1925<sub>(+140) | 2033<sub>(+155) |  |
| 1.2.4 | 2025-11-17 | 1538<sub>(+52) | 1785<sub>(-43) | 1878<sub>(-30) |  |
| 1.2.3 | 2025-10-31 | 1486<sub>(+new) | 1828<sub>(+new) | 1908<sub>(+new) |  |
| 1.1.3 | 2025-10-26 |  |  |  |  |
| 1.0 | 2025-09-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Kreveta+<version>&body=###%20Engine%20name%0AKreveta%0A%0A###%20Version%0A2.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 11:52:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.3", "1.2.4", "2.0.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 1400 --> 2400
  line "STC (8.0+0.08s)" [1486, 1538, 1647, 1669, 1625, 1808, 1848, 1760, 1787, 1937, 2017]
  line "STC (8.0+0.08s)" [1486, 1538, 1647, 1669, 1625, 1808, 1848, 1760, 1787, 1937, 2017]
  line "LTC (60.0+0.60s)" [1828, 1785, 1925, 1974, 2026, 2115, 2163, 2152, 2217, 2210, 2282]
  line "VLTC (2m24s+1.12s)" [1908, 1878, 2033, 2117, 2138, 2268, 2260, 2230, 2267, 2295, 2352]
  line "VLTC (2m24s+1.12s)" [1908, 1878, 2033, 2117, 2138, 2268, 2260, 2230, 2267, 2295, 2352]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.3", "1.2.4", "2.0.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 1400 --> 2400
  line "STC (8.0+0.08s)" [1486, 1538, 1647, 1669, 1625, 1808, 1848, 1760, 1787, 1937, 2017]
  line "STC (8.0+0.08s)" [1486, 1538, 1647, 1669, 1625, 1808, 1848, 1760, 1787, 1937, 2017]
  line "LTC (60.0+0.60s)" [1828, 1785, 1925, 1974, 2026, 2115, 2163, 2152, 2217, 2210, 2282]
  line "VLTC (2m24s+1.12s)" [1908, 1878, 2033, 2117, 2138, 2268, 2260, 2230, 2267, 2295, 2352]
  line "VLTC (2m24s+1.12s)" [1908, 1878, 2033, 2117, 2138, 2268, 2260, 2230, 2267, 2295, 2352]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2352 | 34 | 288 | 49% | 2363 | 25% |
| 2.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2282 | 36 | 258 | 48% | 2302 | 29% |
| 2.3.1 | STC <sub>(8.0+0.08s)</sub> | 2017 | 34 | 296 | 49% | 2021 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2295 | 35 | 272 | 51% | 2283 | 28% |
| 2.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2210 | 37 | 254 | 48% | 2228 | 23% |
| 2.3.0 | STC <sub>(8.0+0.08s)</sub> | 1937 | 33 | 328 | 49% | 1935 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2267 | 32 | 346 | 50% | 2269 | 18% |
| 2.2.5 | LTC <sub>(60.0+0.60s)</sub> | 2217 | 32 | 340 | 48% | 2232 | 25% |
| 2.2.5 | STC <sub>(8.0+0.08s)</sub> | 1787 | 32 | 352 | 52% | 1752 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2230 | 38 | 230 | 49% | 2241 | 29% |
| 2.2.4 | LTC <sub>(60.0+0.60s)</sub> | 2152 | 37 | 248 | 54% | 2113 | 25% |
| 2.2.4 | STC <sub>(8.0+0.08s)</sub> | 1760 | 42 | 204 | 51% | 1755 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2260 | 35 | 288 | 48% | 2279 | 26% |
| 2.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2163 | 36 | 260 | 48% | 2184 | 24% |
| 2.2.3 | STC <sub>(8.0+0.08s)</sub> | 1848 | 37 | 252 | 48% | 1867 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2268 | 37 | 256 | 52% | 2246 | 25% |
| 2.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2115 | 41 | 216 | 49% | 2124 | 21% |
| 2.2.2 | STC <sub>(8.0+0.08s)</sub> | 1808 | 41 | 212 | 54% | 1774 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2138 | 48 | 148 | 50% | 2133 | 22% |
| 2.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2026 | 44 | 180 | 49% | 2040 | 21% |
| 2.2.1 | STC <sub>(8.0+0.08s)</sub> | 1625 | 56 | 110 | 52% | 1608 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2117 | 52 | 124 | 52% | 2103 | 26% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 64 | 84 | 55% | 1928 | 21% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 1669 | 50 | 148 | 55% | 1619 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2033 | 51 | 136 | 52% | 2014 | 24% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1925 | 53 | 132 | 52% | 1908 | 17% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 46 | 172 | 48% | 1671 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1878 | 52 | 158 | 42% | 2018 | 9% |
| 1.2.4 | LTC <sub>(60.0+0.60s)</sub> | 1785 | 60 | 110 | 48% | 1820 | 12% |
| 1.2.4 | STC <sub>(8.0+0.08s)</sub> | 1538 | 61 | 108 | 48% | 1566 | 9% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1908 | 34 | 324 | 52% | 1893 | 19% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 1828 | 34 | 316 | 52% | 1814 | 19% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 1486 | 34 | 316 | 50% | 1478 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |