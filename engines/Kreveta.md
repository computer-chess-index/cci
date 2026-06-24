# Engine: Kreveta

Author: Daniel Michna

Home: https://github.com/ZlomenyMesic/Kreveta

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-05-12 | 1943<sub>(+53) | 2221<sub>(+72) | 2298<sub>(+65) |  |
| 2.3.0 | 2026-04-20 | 1890<sub>(+140) | 2149<sub>(-8) | 2233<sub>(+27) |  |
| 2.2.5 | 2026-03-15 | 1750<sub>(+23) | 2157<sub>(+59) | 2206<sub>(+37) |  |
| 2.2.4 | 2026-03-05 | 1727<sub>(-81) | 2098<sub>(-8) | 2169<sub>(-32) |  |
| 2.2.3 | 2026-02-05 | 1808<sub>(+35) | 2106<sub>(+46) | 2201<sub>(-8) |  |
| 2.2.2 | 2026-01-13 | 1773<sub>(+175) | 2060<sub>(+82) | 2209<sub>(+126) |  |
| 2.2.1 | 2025-12-25 | 1598<sub>(-44) | 1978<sub>(+46) | 2083<sub>(+19) |  |
| 2.2.0 | 2025-12-23 | 1642<sub>(+25) | 1932<sub>(+49) | 2064<sub>(+78) |  |
| 2.0.0 | 2025-12-01 | 1617<sub>(+101) | 1883<sub>(+135) | 1986<sub>(+151) |  |
| 1.2.4 | 2025-11-17 | 1516<sub>(+51) | 1748<sub>(-41) | 1835<sub>(-28) |  |
| 1.2.3 | 2025-10-31 | 1465<sub>(+new) | 1789<sub>(+new) | 1863<sub>(+new) |  |
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

Generated: 2026-06-24 06:25:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.3", "1.2.4", "2.0.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 1400 --> 2300
  line "STC (8.0+0.08s)" [1465, 1516, 1617, 1642, 1598, 1773, 1808, 1727, 1750, 1890, 1943]
  line "STC (8.0+0.08s)" [1465, 1516, 1617, 1642, 1598, 1773, 1808, 1727, 1750, 1890, 1943]
  line "LTC (60.0+0.60s)" [1789, 1748, 1883, 1932, 1978, 2060, 2106, 2098, 2157, 2149, 2221]
  line "VLTC (2m24s+1.12s)" [1863, 1835, 1986, 2064, 2083, 2209, 2201, 2169, 2206, 2233, 2298]
  line "VLTC (2m24s+1.12s)" [1863, 1835, 1986, 2064, 2083, 2209, 2201, 2169, 2206, 2233, 2298]
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
  line "STC (8.0+0.08s)" [1465, 1516, 1617, 1642, 1598, 1773, 1808, 1727, 1750, 1890, 1943]
  line "STC (8.0+0.08s)" [1465, 1516, 1617, 1642, 1598, 1773, 1808, 1727, 1750, 1890, 1943]
  line "LTC (60.0+0.60s)" [1789, 1748, 1883, 1932, 1978, 2060, 2106, 2098, 2157, 2149, 2221]
  line "VLTC (2m24s+1.12s)" [1863, 1835, 1986, 2064, 2083, 2209, 2201, 2169, 2206, 2233, 2298]
  line "VLTC (2m24s+1.12s)" [1863, 1835, 1986, 2064, 2083, 2209, 2201, 2169, 2206, 2233, 2298]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 32 | 336 | 50% | 2286 | 24% |
| 2.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2221 | 32 | 336 | 49% | 2232 | 27% |
| 2.3.1 | STC <sub>(8.0+0.08s)</sub> | 1943 | 31 | 362 | 47% | 1963 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2233 | 35 | 272 | 51% | 2221 | 28% |
| 2.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2149 | 37 | 254 | 48% | 2165 | 23% |
| 2.3.0 | STC <sub>(8.0+0.08s)</sub> | 1890 | 33 | 328 | 49% | 1887 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 32 | 346 | 50% | 2209 | 18% |
| 2.2.5 | LTC <sub>(60.0+0.60s)</sub> | 2157 | 32 | 340 | 48% | 2171 | 25% |
| 2.2.5 | STC <sub>(8.0+0.08s)</sub> | 1750 | 32 | 352 | 52% | 1716 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2169 | 38 | 230 | 49% | 2182 | 29% |
| 2.2.4 | LTC <sub>(60.0+0.60s)</sub> | 2098 | 37 | 248 | 54% | 2059 | 25% |
| 2.2.4 | STC <sub>(8.0+0.08s)</sub> | 1727 | 42 | 204 | 51% | 1720 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2201 | 35 | 288 | 48% | 2218 | 26% |
| 2.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2106 | 36 | 260 | 48% | 2126 | 24% |
| 2.2.3 | STC <sub>(8.0+0.08s)</sub> | 1808 | 37 | 252 | 48% | 1825 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2209 | 37 | 256 | 52% | 2187 | 25% |
| 2.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2060 | 40 | 216 | 49% | 2070 | 21% |
| 2.2.2 | STC <sub>(8.0+0.08s)</sub> | 1773 | 41 | 212 | 54% | 1739 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2083 | 48 | 148 | 50% | 2078 | 22% |
| 2.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1978 | 44 | 180 | 49% | 1990 | 21% |
| 2.2.1 | STC <sub>(8.0+0.08s)</sub> | 1598 | 56 | 110 | 52% | 1582 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2064 | 52 | 124 | 52% | 2051 | 26% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1932 | 64 | 84 | 55% | 1886 | 21% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 1642 | 50 | 148 | 55% | 1592 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1986 | 51 | 136 | 52% | 1967 | 24% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1883 | 52 | 132 | 52% | 1866 | 17% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1617 | 46 | 172 | 48% | 1640 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1835 | 52 | 158 | 42% | 1974 | 9% |
| 1.2.4 | LTC <sub>(60.0+0.60s)</sub> | 1748 | 60 | 110 | 48% | 1782 | 12% |
| 1.2.4 | STC <sub>(8.0+0.08s)</sub> | 1516 | 61 | 108 | 48% | 1543 | 9% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1863 | 34 | 324 | 52% | 1848 | 19% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 1789 | 34 | 316 | 52% | 1775 | 19% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 1465 | 34 | 316 | 50% | 1455 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |