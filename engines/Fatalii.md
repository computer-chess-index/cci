# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2187<sub>(+67) | 2483<sub>(-66) | 2596<sub>(-82) |  |
| 0.10.0 | 2026-03-09 | 2120 | 2549 | 2678 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2178<sub>(+41) | 2476<sub>(+24) | 2565<sub>(+76) |  |
| 0.10.0 | 2026-03-09 | 2137 | 2452 | 2489 |  |
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

Generated: 2026-11-15 05:38:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2120, 2187]
  line "E1: LTC (60.0+0.60s)" [2549, 2483]
  line "E1: VLTC (2m24s+1.12s)" [2678, 2596]
  line "P1: STC (8.0+0.08s)" [2137, 2178]
  line "P1: LTC (60.0+0.60s)" [2452, 2476]
  line "P1: VLTC (2m24s+1.12s)" [2489, 2565]
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
|  |  | P1 | 2565 | 37 | 260 | 51% | 2546 | 27% |
|  |  | E1 | 2596 | 32 | 366 | 51% | 2554 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2520 | 27 | 448 | 50% | 2523 | 31% |
|  |  | P1 | 2476 | 38 | 248 | 47% | 2530 | 29% |
|  |  | E1 | 2483 | 32 | 352 | 57% | 2406 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2284 | 28 | 438 | 49% | 2294 | 27% |
|  |  | P1 | 2178 | 37 | 252 | 47% | 2221 | 26% |
|  |  | E1 | 2187 | 31 | 358 | 50% | 2186 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2678 | 76 | 66 | 47% | 2743 | 27% |
|  |  | T1 | 2611 | 29 | 424 | 48% | 2635 | 25% |
|  |  | P1 | 2489 | 91 | 44 | 42% | 2597 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2549 | 71 | 78 | 57% | 2492 | 24% |
|  |  | T1 | 2547 | 28 | 454 | 51% | 2543 | 25% |
|  |  | P1 | 2452 | 82 | 56 | 45% | 2516 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2120 | 66 | 90 | 48% | 2141 | 17% |
|  |  | T1 | 2282 | 27 | 464 | 52% | 2257 | 25% |
|  |  | P1 | 2137 | 76 | 74 | 49% | 2134 | 15% |