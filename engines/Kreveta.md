# Engine: Kreveta

Author: Daniel Michna

Home: https://github.com/ZlomenyMesic/Kreveta

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-05-12 | 1941<sub>(+56) | 2205<sub>(+60) | 2292<sub>(+64) |  |
| 2.3.0 | 2026-04-20 | 1885<sub>(+139) | 2145<sub>(-8) | 2228<sub>(+26) |  |
| 2.2.5 | 2026-03-15 | 1746<sub>(+25) | 2153<sub>(+59) | 2202<sub>(+37) |  |
| 2.2.4 | 2026-03-05 | 1721<sub>(-83) | 2094<sub>(-8) | 2165<sub>(-30) |  |
| 2.2.3 | 2026-02-05 | 1804<sub>(+37) | 2102<sub>(+45) | 2195<sub>(-8) |  |
| 2.2.2 | 2026-01-13 | 1767<sub>(+173) | 2057<sub>(+83) | 2203<sub>(+124) |  |
| 2.2.1 | 2025-12-25 | 1594<sub>(-44) | 1974<sub>(+46) | 2079<sub>(+18) |  |
| 2.2.0 | 2025-12-23 | 1638<sub>(+25) | 1928<sub>(+49) | 2061<sub>(+79) |  |
| 2.0.0 | 2025-12-01 | 1613<sub>(+101) | 1879<sub>(+135) | 1982<sub>(+151) |  |
| 1.2.4 | 2025-11-17 | 1512<sub>(+51) | 1744<sub>(-39) | 1831<sub>(-28) |  |
| 1.2.3 | 2025-10-31 | 1461<sub>(+new) | 1783<sub>(+new) | 1859<sub>(+new) |  |
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

Generated: 2026-07-16 06:25:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.3", "1.2.4", "2.0.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 1400 --> 2300
  line "STC (8.0+0.08s)" [1461, 1512, 1613, 1638, 1594, 1767, 1804, 1721, 1746, 1885, 1941]
  line "STC (8.0+0.08s)" [1461, 1512, 1613, 1638, 1594, 1767, 1804, 1721, 1746, 1885, 1941]
  line "LTC (60.0+0.60s)" [1783, 1744, 1879, 1928, 1974, 2057, 2102, 2094, 2153, 2145, 2205]
  line "VLTC (2m24s+1.12s)" [1859, 1831, 1982, 2061, 2079, 2203, 2195, 2165, 2202, 2228, 2292]
  line "VLTC (2m24s+1.12s)" [1859, 1831, 1982, 2061, 2079, 2203, 2195, 2165, 2202, 2228, 2292]
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
  y-axis "Elo Rating" 1400 --> 2300
  line "STC (8.0+0.08s)" [1461, 1512, 1613, 1638, 1594, 1767, 1804, 1721, 1746, 1885, 1941]
  line "STC (8.0+0.08s)" [1461, 1512, 1613, 1638, 1594, 1767, 1804, 1721, 1746, 1885, 1941]
  line "LTC (60.0+0.60s)" [1783, 1744, 1879, 1928, 1974, 2057, 2102, 2094, 2153, 2145, 2205]
  line "VLTC (2m24s+1.12s)" [1859, 1831, 1982, 2061, 2079, 2203, 2195, 2165, 2202, 2228, 2292]
  line "VLTC (2m24s+1.12s)" [1859, 1831, 1982, 2061, 2079, 2203, 2195, 2165, 2202, 2228, 2292]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2292 | 31 | 352 | 50% | 2280 | 26% |
| 2.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2205 | 31 | 352 | 48% | 2226 | 28% |
| 2.3.1 | STC <sub>(8.0+0.08s)</sub> | 1941 | 31 | 378 | 47% | 1959 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2228 | 35 | 272 | 51% | 2215 | 28% |
| 2.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2145 | 37 | 254 | 48% | 2161 | 23% |
| 2.3.0 | STC <sub>(8.0+0.08s)</sub> | 1885 | 33 | 328 | 49% | 1883 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2202 | 32 | 346 | 50% | 2205 | 18% |
| 2.2.5 | LTC <sub>(60.0+0.60s)</sub> | 2153 | 32 | 340 | 48% | 2167 | 25% |
| 2.2.5 | STC <sub>(8.0+0.08s)</sub> | 1746 | 32 | 352 | 52% | 1712 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2165 | 38 | 230 | 49% | 2176 | 29% |
| 2.2.4 | LTC <sub>(60.0+0.60s)</sub> | 2094 | 37 | 248 | 54% | 2055 | 25% |
| 2.2.4 | STC <sub>(8.0+0.08s)</sub> | 1721 | 42 | 204 | 51% | 1716 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2195 | 35 | 288 | 48% | 2214 | 26% |
| 2.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2102 | 36 | 260 | 48% | 2124 | 24% |
| 2.2.3 | STC <sub>(8.0+0.08s)</sub> | 1804 | 37 | 252 | 48% | 1821 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 37 | 256 | 52% | 2183 | 25% |
| 2.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2057 | 40 | 216 | 49% | 2066 | 21% |
| 2.2.2 | STC <sub>(8.0+0.08s)</sub> | 1767 | 41 | 212 | 54% | 1733 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2079 | 48 | 148 | 50% | 2074 | 22% |
| 2.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 44 | 180 | 49% | 1986 | 21% |
| 2.2.1 | STC <sub>(8.0+0.08s)</sub> | 1594 | 56 | 110 | 52% | 1577 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2061 | 52 | 124 | 52% | 2047 | 26% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1928 | 64 | 84 | 55% | 1882 | 21% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 1638 | 50 | 148 | 55% | 1588 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1982 | 51 | 136 | 52% | 1963 | 24% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1879 | 52 | 132 | 52% | 1862 | 17% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1613 | 46 | 172 | 48% | 1636 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1831 | 52 | 158 | 42% | 1970 | 9% |
| 1.2.4 | LTC <sub>(60.0+0.60s)</sub> | 1744 | 60 | 110 | 48% | 1778 | 12% |
| 1.2.4 | STC <sub>(8.0+0.08s)</sub> | 1512 | 61 | 108 | 48% | 1539 | 9% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1859 | 34 | 324 | 52% | 1844 | 19% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 1783 | 34 | 316 | 52% | 1771 | 19% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 1461 | 34 | 316 | 50% | 1451 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |