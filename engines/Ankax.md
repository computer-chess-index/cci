# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2165<sub>(+74) | 2460<sub>(-4) | 2531<sub>(-8) |  |
| 1.0.6 | 2026-11-12 | 2091<sub>(-31) | 2464<sub>(+119) | 2539<sub>(+81) |  |
| 1.0.4 | 2026-11-10 | 2122 | 2345 | 2458 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2187<sub>(+89) | 2421<sub>(-25) | 2514<sub>(-17) |  |
| 1.0.6 | 2026-11-12 | 2098<sub>(+45) | 2446<sub>(+70) | 2531<sub>(+190) |  |
| 1.0.4 | 2026-11-10 | 2053 | 2376 | 2341 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2053 | 2376 | 2341 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ankax+<version>&body=###%20Engine%20name%0AAnkax%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:35:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2122, 2091, 2165]
  line "E1: LTC (60.0+0.60s)" [2345, 2464, 2460]
  line "E1: VLTC (2m24s+1.12s)" [2458, 2539, 2531]
  line "P1: STC (8.0+0.08s)" [2053, 2098, 2187]
  line "P1: LTC (60.0+0.60s)" [2376, 2446, 2421]
  line "P1: VLTC (2m24s+1.12s)" [2341, 2531, 2514]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2514 | 47 | 140 | 51% | 2503 | 35% |
|  |  | E1 | 2531 | 40 | 204 | 48% | 2549 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2421 | 50 | 132 | 48% | 2445 | 29% |
|  |  | E1 | 2460 | 38 | 224 | 52% | 2448 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2187 | 46 | 164 | 50% | 2196 | 24% |
|  |  | E1 | 2165 | 41 | 232 | 51% | 2202 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2531 | 52 | 124 | 43% | 2600 | 31% |
|  |  | E1 | 2539 | 48 | 140 | 53% | 2518 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2446 | 46 | 156 | 48% | 2464 | 28% |
|  |  | E1 | 2464 | 46 | 164 | 52% | 2442 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2098 | 44 | 178 | 46% | 2138 | 22% |
|  |  | E1 | 2091 | 43 | 196 | 45% | 2149 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2341 | 43 | 186 | 49% | 2348 | 24% |
|  |  | E1 | 2458 | 41 | 204 | 52% | 2445 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2376 | 49 | 150 | 58% | 2306 | 28% |
|  |  | E1 | 2345 | 41 | 204 | 50% | 2331 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2053 | 47 | 172 | 51% | 2006 | 18% |
|  |  | E1 | 2122 | 42 | 208 | 56% | 2044 | 22% |