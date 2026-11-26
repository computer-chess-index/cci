# Engine: Fatalii

Author: Patrick Heck

Home: https://github.com/FitzOReilly/fatalii

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2194<sub>(+16) | 2503<sub>(-27) | 2624<sub>(-40) |  |
| 0.10.0 | 2026-03-09 | 2178 | 2530 | 2664 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.10.1 | 2026-05-11 | 2206<sub>(+20) | 2510<sub>(+30) | 2622<sub>(+27) |  |
| 0.10.0 | 2026-03-09 | 2186 | 2480 | 2595 |  |
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

Generated: 2026-11-26 05:38:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.10.0", "0.10.1"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2178, 2194]
  line "E1: LTC (60.0+0.60s)" [2530, 2503]
  line "E1: VLTC (2m24s+1.12s)" [2664, 2624]
  line "P1: STC (8.0+0.08s)" [2186, 2206]
  line "P1: LTC (60.0+0.60s)" [2480, 2510]
  line "P1: VLTC (2m24s+1.12s)" [2595, 2622]
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
|  |  | P1 | 2622 | 35 | 278 | 52% | 2595 | 27% |
|  |  | E1 | 2624 | 30 | 414 | 53% | 2564 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2520 | 27 | 448 | 50% | 2523 | 31% |
|  |  | P1 | 2510 | 35 | 286 | 46% | 2569 | 29% |
|  |  | E1 | 2503 | 29 | 422 | 57% | 2423 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2284 | 28 | 438 | 49% | 2294 | 27% |
|  |  | P1 | 2206 | 36 | 272 | 46% | 2255 | 26% |
|  |  | E1 | 2194 | 29 | 402 | 50% | 2191 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.10.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2664 | 54 | 122 | 48% | 2707 | 29% |
|  |  | T1 | 2611 | 29 | 424 | 48% | 2635 | 25% |
|  |  | P1 | 2595 | 63 | 92 | 50% | 2606 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2530 | 57 | 116 | 53% | 2515 | 26% |
|  |  | T1 | 2547 | 28 | 454 | 51% | 2543 | 25% |
|  |  | P1 | 2480 | 61 | 100 | 45% | 2553 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2178 | 48 | 162 | 53% | 2144 | 22% |
|  |  | T1 | 2282 | 27 | 464 | 52% | 2257 | 25% |
|  |  | P1 | 2186 | 55 | 128 | 51% | 2165 | 20% |