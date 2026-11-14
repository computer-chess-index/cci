# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2199<sub>(+88) | 2481<sub>(-87) | 2593<sub>(-71) |  |
| 0.10.0 | 2026-03-09 | 2111 | 2568 | 2664 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2172<sub>(+52) | 2468<sub>(+20) | 2564<sub>(+88) |  |
| 0.10.0 | 2026-03-09 | 2120 | 2448 | 2476 |  |
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

Generated: 2026-11-14 05:38:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2111, 2199]
  line "E1: LTC (60.0+0.60s)" [2568, 2481]
  line "E1: VLTC (2m24s+1.12s)" [2664, 2593]
  line "P1: STC (8.0+0.08s)" [2120, 2172]
  line "P1: LTC (60.0+0.60s)" [2448, 2468]
  line "P1: VLTC (2m24s+1.12s)" [2476, 2564]
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
|  |  | P1 | 2564 | 37 | 256 | 51% | 2547 | 27% |
|  |  | E1 | 2593 | 32 | 358 | 50% | 2558 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2520 | 27 | 448 | 50% | 2523 | 31% |
|  |  | P1 | 2468 | 38 | 240 | 47% | 2520 | 29% |
|  |  | E1 | 2481 | 32 | 344 | 56% | 2411 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2284 | 28 | 438 | 49% | 2294 | 27% |
|  |  | P1 | 2172 | 38 | 244 | 47% | 2215 | 26% |
|  |  | E1 | 2199 | 31 | 354 | 50% | 2196 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2611 | 29 | 424 | 48% | 2635 | 25% |
|  |  | P1 | 2476 | 103 | 36 | 38% | 2634 | 25% |
|  |  | E1 | 2664 | 89 | 50 | 43% | 2770 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2448 | 103 | 36 | 47% | 2476 | 22% |
|  |  | E1 | 2568 | 91 | 52 | 60% | 2488 | 19% |
|  |  | T1 | 2547 | 28 | 454 | 51% | 2543 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2120 | 99 | 48 | 47% | 2163 | 15% |
|  |  | E1 | 2111 | 78 | 64 | 41% | 2222 | 17% |
|  |  | T1 | 2282 | 27 | 464 | 52% | 2257 | 25% |