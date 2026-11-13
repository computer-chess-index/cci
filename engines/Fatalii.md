# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2195<sub>(+12) | 2472<sub>(-20) | 2579<sub>(-58) |  |
| 0.10.0 | 2026-03-09 | 2183 | 2492 | 2637 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2184<sub>(+171) | 2485<sub>(+78) | 2584<sub>(+116) |  |
| 0.10.0 | 2026-03-09 | 2013 | 2407 | 2468 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2284<sub>(+2) | 2520<sub>(-27) | 2610<sub>(-1) |  |
| 0.10.0 | 2026-03-09 | 2282 | 2547 | 2611 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fatalii+<version>&body=###%20Engine%20name%0AFatalii%0A%0A###%20Version%0A0.10.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:38:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2000 --> 2700
  line "E1: STC (8.0+0.08s)" [2183, 2195]
  line "E1: LTC (60.0+0.60s)" [2492, 2472]
  line "E1: VLTC (2m24s+1.12s)" [2637, 2579]
  line "P1: STC (8.0+0.08s)" [2013, 2184]
  line "P1: LTC (60.0+0.60s)" [2407, 2485]
  line "P1: VLTC (2m24s+1.12s)" [2468, 2584]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2200 --> 2700
  line "T1: STC (8.0+0.08s)" [2282, 2284]
  line "T1: LTC (60.0+0.60s)" [2547, 2520]
  line "T1: VLTC (2m24s+1.12s)" [2611, 2610]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.10.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2610 | 26 | 490 | 50% | 2610 | 27% |
|  |  | P1 | 2584 | 38 | 244 | 53% | 2553 | 27% |
|  |  | E1 | 2579 | 32 | 358 | 50% | 2543 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2520 | 27 | 448 | 50% | 2523 | 31% |
|  |  | P1 | 2485 | 39 | 236 | 47% | 2534 | 29% |
|  |  | E1 | 2472 | 33 | 340 | 56% | 2399 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2284 | 28 | 438 | 49% | 2294 | 27% |
|  |  | P1 | 2184 | 38 | 236 | 47% | 2232 | 27% |
|  |  | E1 | 2195 | 32 | 346 | 50% | 2191 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2468 | 133 | 24 | 33% | 2688 | 17% |
|  |  | E1 | 2637 | 121 | 32 | 44% | 2697 | 13% |
|  |  | T1 | 2611 | 29 | 424 | 48% | 2635 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2492 | 115 | 36 | 57% | 2450 | 14% |
|  |  | T1 | 2547 | 28 | 454 | 51% | 2543 | 25% |
|  |  | P1 | 2407 | 139 | 20 | 50% | 2375 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2183 | 94 | 44 | 48% | 2229 | 18% |
|  |  | T1 | 2282 | 27 | 464 | 52% | 2257 | 25% |
|  |  | P1 | 2013 | 162 | 24 | 35% | 2291 | 4% |