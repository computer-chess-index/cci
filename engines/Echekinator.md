# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2664<sub>(+362) | 3011<sub>(+407) | 3024<sub>(+363) |  |
| 1.2 | 2026-10-14 | 2302<sub>(+492) | 2604<sub>(+521) | 2661<sub>(+547) |  |
| 1.0 | 2025-11-25 | 1810 | 2083 | 2114 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3 | 2026-11-06 | 2799<sub>(+550) | 3081<sub>(+470) | 3163<sub>(+436) |  |
| 1.2 | 2026-10-14 | 2249<sub>(+387) | 2611<sub>(+575) | 2727<sub>(+568) |  |
| 1.0 | 2025-11-25 | 1862 | 2036 | 2159 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-07 05:37:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3"]
  y-axis "Elo Rating" 1800 --> 3200
  line "E1: STC (8.0+0.08s)" [1810, 2302, 2664]
  line "E1: LTC (60.0+0.60s)" [2083, 2604, 3011]
  line "E1: VLTC (2m24s+1.12s)" [2114, 2661, 3024]
  line "P1: STC (8.0+0.08s)" [1862, 2249, 2799]
  line "P1: LTC (60.0+0.60s)" [2036, 2611, 3081]
  line "P1: VLTC (2m24s+1.12s)" [2159, 2727, 3163]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1774, 2098]
  line "T1: LTC (60.0+0.60s)" [2061, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3024 | 35 | 248 | 52% | 3004 | 41% |
|  |  | P1 | 3163 | 48 | 128 | 48% | 3167 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3011 | 29 | 350 | 48% | 3021 | 43% |
|  |  | P1 | 3081 | 41 | 174 | 48% | 3085 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2799 | 60 | 102 | 60% | 2692 | 26% |
|  |  | E1 | 2664 | 45 | 172 | 56% | 2600 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2727 | 45 | 162 | 53% | 2693 | 36% |
|  |  | E1 | 2661 | 36 | 270 | 50% | 2657 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2611 | 47 | 156 | 52% | 2583 | 27% |
|  |  | E1 | 2604 | 36 | 270 | 50% | 2611 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2249 | 49 | 150 | 48% | 2264 | 20% |
|  |  | E1 | 2302 | 36 | 280 | 49% | 2310 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2159 | 51 | 156 | 54% | 2106 | 15% |
|  |  | E1 | 2114 | 42 | 208 | 45% | 2215 | 24% |
|  |  | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2083 | 40 | 228 | 45% | 2163 | 23% |
|  |  | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 2036 | 46 | 164 | 49% | 2060 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1810 | 42 | 204 | 50% | 1813 | 20% |
|  |  | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1862 | 40 | 216 | 50% | 1860 | 23% |