# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1875<sub>(+601) | 2165<sub>(+102) | 2242<sub>(+203) |  |
| R4 | 2026-04-22 | 1274 | 2063 | 2039 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1813<sub>(+309) | 2184<sub>(+108) | 2372<sub>(+301) |  |
| R4 | 2026-04-22 | 1504 | 2076 | 2071 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1929<sub>(+575) | 2192<sub>(+356) | 2354<sub>(+229) |  |
| R4 | 2026-04-22 | 1354 | 1836 | 2125 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:44:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1200 --> 2400
  line "E1: STC (8.0+0.08s)" [1274, 1875]
  line "E1: LTC (60.0+0.60s)" [2063, 2165]
  line "E1: VLTC (2m24s+1.12s)" [2039, 2242]
  line "P1: STC (8.0+0.08s)" [1504, 1813]
  line "P1: LTC (60.0+0.60s)" [2076, 2184]
  line "P1: VLTC (2m24s+1.12s)" [2071, 2372]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "T1: STC (8.0+0.08s)" [1354, 1929]
  line "T1: LTC (60.0+0.60s)" [1836, 2192]
  line "T1: VLTC (2m24s+1.12s)" [2125, 2354]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2354 | 26 | 482 | 49% | 2367 | 33% |
|  |  | P1 | 2372 | 37 | 246 | 43% | 2448 | 30% |
|  |  | E1 | 2242 | 35 | 302 | 51% | 2246 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2192 | 28 | 450 | 51% | 2174 | 29% |
|  |  | P1 | 2184 | 41 | 204 | 47% | 2245 | 30% |
|  |  | E1 | 2165 | 34 | 298 | 46% | 2225 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1813 | 41 | 202 | 48% | 1835 | 24% |
|  |  | E1 | 1875 | 30 | 380 | 46% | 1931 | 30% |
|  |  | T1 | 1929 | 26 | 542 | 50% | 1935 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2039 | 149 | 26 | 17% | 2542 | 12% |
|  |  | T1 | 2125 | 31 | 372 | 41% | 2236 | 28% |
|  |  | P1 | 2071 | 144 | 20 | 28% | 2342 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1836 | 36 | 298 | 46% | 1906 | 23% |
|  |  | P1 | 2076 | 128 | 20 | 45% | 2122 | 20% |
|  |  | E1 | 2063 | 125 | 28 | 27% | 2429 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1354 | 38 | 288 | 47% | 1418 | 19% |
|  |  | P1 | 1504 | 138 | 32 | 11% | 2157 | 22% |
|  |  | E1 | 1274 | 75 | 68 | 49% | 1310 | 15% |