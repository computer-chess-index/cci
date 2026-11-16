# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2191<sub>(+47) | 2493<sub>(-60) | 2606<sub>(-72) |  |
| 0.10.0 | 2026-03-09 | 2144 | 2553 | 2678 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2180<sub>(+40) | 2481<sub>(+10) | 2577<sub>(+40) |  |
| 0.10.0 | 2026-03-09 | 2140 | 2471 | 2537 |  |
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

Generated: 2026-11-16 05:38:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2144, 2191]
  line "E1: LTC (60.0+0.60s)" [2553, 2493]
  line "E1: VLTC (2m24s+1.12s)" [2678, 2606]
  line "P1: STC (8.0+0.08s)" [2140, 2180]
  line "P1: LTC (60.0+0.60s)" [2471, 2481]
  line "P1: VLTC (2m24s+1.12s)" [2537, 2577]
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
|  |  | P1 | 2577 | 36 | 264 | 52% | 2554 | 27% |
|  |  | E1 | 2606 | 32 | 370 | 51% | 2560 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2520 | 27 | 448 | 50% | 2523 | 31% |
|  |  | P1 | 2481 | 38 | 248 | 47% | 2537 | 29% |
|  |  | E1 | 2493 | 32 | 360 | 57% | 2414 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2284 | 28 | 438 | 49% | 2294 | 27% |
|  |  | P1 | 2180 | 37 | 252 | 47% | 2225 | 26% |
|  |  | E1 | 2191 | 31 | 366 | 50% | 2190 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2537 | 83 | 52 | 47% | 2585 | 29% |
|  |  | E1 | 2678 | 70 | 78 | 47% | 2742 | 24% |
|  |  | T1 | 2611 | 29 | 424 | 48% | 2635 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2471 | 80 | 60 | 46% | 2537 | 25% |
|  |  | E1 | 2553 | 67 | 86 | 56% | 2503 | 27% |
|  |  | T1 | 2547 | 28 | 454 | 51% | 2543 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2144 | 62 | 102 | 50% | 2137 | 19% |
|  |  | T1 | 2282 | 27 | 464 | 52% | 2257 | 25% |
|  |  | P1 | 2140 | 70 | 82 | 49% | 2136 | 18% |