# Engine: Kreveta

Author: Daniel Michna

Home: https://github.com/ZlomenyMesic/Kreveta

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-05-12 | 1944<sub>(+55) | 2213<sub>(+65) | 2296<sub>(+63) |  |
| 2.3.0 | 2026-04-20 | 1889<sub>(+141) | 2148<sub>(-8) | 2233<sub>(+27) |  |
| 2.2.5 | 2026-03-15 | 1748<sub>(+24) | 2156<sub>(+58) | 2206<sub>(+37) |  |
| 2.2.4 | 2026-03-05 | 1724<sub>(-82) | 2098<sub>(-7) | 2169<sub>(-30) |  |
| 2.2.3 | 2026-02-05 | 1806<sub>(+36) | 2105<sub>(+45) | 2199<sub>(-8) |  |
| 2.2.2 | 2026-01-13 | 1770<sub>(+173) | 2060<sub>(+84) | 2207<sub>(+124) |  |
| 2.2.1 | 2025-12-25 | 1597<sub>(-43) | 1976<sub>(+45) | 2083<sub>(+19) |  |
| 2.2.0 | 2025-12-23 | 1640<sub>(+24) | 1931<sub>(+49) | 2064<sub>(+78) |  |
| 2.0.0 | 2025-12-01 | 1616<sub>(+103) | 1882<sub>(+135) | 1986<sub>(+153) |  |
| 1.2.4 | 2025-11-17 | 1513<sub>(+50) | 1747<sub>(-40) | 1833<sub>(-29) |  |
| 1.2.3 | 2025-10-31 | 1463<sub>(+new) | 1787<sub>(+new) | 1862<sub>(+new) |  |
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

Generated: 2026-07-11 06:26:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.3", "1.2.4", "2.0.0", "2.2.0", "2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 1400 --> 2300
  line "STC (8.0+0.08s)" [1463, 1513, 1616, 1640, 1597, 1770, 1806, 1724, 1748, 1889, 1944]
  line "STC (8.0+0.08s)" [1463, 1513, 1616, 1640, 1597, 1770, 1806, 1724, 1748, 1889, 1944]
  line "LTC (60.0+0.60s)" [1787, 1747, 1882, 1931, 1976, 2060, 2105, 2098, 2156, 2148, 2213]
  line "VLTC (2m24s+1.12s)" [1862, 1833, 1986, 2064, 2083, 2207, 2199, 2169, 2206, 2233, 2296]
  line "VLTC (2m24s+1.12s)" [1862, 1833, 1986, 2064, 2083, 2207, 2199, 2169, 2206, 2233, 2296]
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
  line "STC (8.0+0.08s)" [1463, 1513, 1616, 1640, 1597, 1770, 1806, 1724, 1748, 1889, 1944]
  line "STC (8.0+0.08s)" [1463, 1513, 1616, 1640, 1597, 1770, 1806, 1724, 1748, 1889, 1944]
  line "LTC (60.0+0.60s)" [1787, 1747, 1882, 1931, 1976, 2060, 2105, 2098, 2156, 2148, 2213]
  line "VLTC (2m24s+1.12s)" [1862, 1833, 1986, 2064, 2083, 2207, 2199, 2169, 2206, 2233, 2296]
  line "VLTC (2m24s+1.12s)" [1862, 1833, 1986, 2064, 2083, 2207, 2199, 2169, 2206, 2233, 2296]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2296 | 32 | 348 | 50% | 2286 | 26% |
| 2.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2213 | 31 | 348 | 48% | 2230 | 28% |
| 2.3.1 | STC <sub>(8.0+0.08s)</sub> | 1944 | 31 | 374 | 47% | 1962 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2233 | 35 | 272 | 51% | 2221 | 28% |
| 2.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2148 | 37 | 254 | 48% | 2165 | 23% |
| 2.3.0 | STC <sub>(8.0+0.08s)</sub> | 1889 | 33 | 328 | 49% | 1887 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 32 | 346 | 50% | 2209 | 18% |
| 2.2.5 | LTC <sub>(60.0+0.60s)</sub> | 2156 | 32 | 340 | 48% | 2171 | 25% |
| 2.2.5 | STC <sub>(8.0+0.08s)</sub> | 1748 | 32 | 352 | 52% | 1715 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2169 | 38 | 230 | 49% | 2180 | 29% |
| 2.2.4 | LTC <sub>(60.0+0.60s)</sub> | 2098 | 37 | 248 | 54% | 2057 | 25% |
| 2.2.4 | STC <sub>(8.0+0.08s)</sub> | 1724 | 42 | 204 | 51% | 1719 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2199 | 35 | 288 | 48% | 2218 | 26% |
| 2.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2105 | 36 | 260 | 48% | 2126 | 24% |
| 2.2.3 | STC <sub>(8.0+0.08s)</sub> | 1806 | 37 | 252 | 48% | 1824 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 37 | 256 | 52% | 2187 | 25% |
| 2.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2060 | 40 | 216 | 49% | 2068 | 21% |
| 2.2.2 | STC <sub>(8.0+0.08s)</sub> | 1770 | 41 | 212 | 54% | 1737 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2083 | 48 | 148 | 50% | 2078 | 22% |
| 2.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1976 | 44 | 180 | 49% | 1989 | 21% |
| 2.2.1 | STC <sub>(8.0+0.08s)</sub> | 1597 | 56 | 110 | 52% | 1580 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2064 | 52 | 124 | 52% | 2049 | 26% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1931 | 64 | 84 | 55% | 1885 | 21% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 1640 | 50 | 148 | 55% | 1590 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1986 | 51 | 136 | 52% | 1966 | 24% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1882 | 52 | 132 | 52% | 1864 | 17% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1616 | 46 | 172 | 48% | 1639 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1833 | 52 | 158 | 42% | 1972 | 9% |
| 1.2.4 | LTC <sub>(60.0+0.60s)</sub> | 1747 | 60 | 110 | 48% | 1781 | 12% |
| 1.2.4 | STC <sub>(8.0+0.08s)</sub> | 1513 | 61 | 108 | 48% | 1542 | 9% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1862 | 34 | 324 | 52% | 1847 | 19% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 1787 | 34 | 316 | 52% | 1774 | 19% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 1463 | 34 | 316 | 50% | 1454 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |