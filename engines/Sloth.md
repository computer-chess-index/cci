# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2444<sub>(+127) | 2957<sub>(+210) | 3052<sub>(+186) |  |
| 2.2 | 2026-08-28 | 2317 | 2747 | 2866 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4 | 2026-10-09 | 2730<sub>(+103) | 3121<sub>(+127) | 3168<sub>(+114) |  |
| 2.2 | 2026-08-28 | 2627 | 2994 | 3054 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3 | 2026-09-22 | 2579<sub>(+36) | 2962<sub>(+81) | 3021<sub>(+39) |  |
| 2.2 | 2026-08-28 | 2543 | 2881 | 2982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sloth+<version>&body=###%20Engine%20name%0ASloth%0A%0A###%20Version%0A2.3" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 11:19:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4", "2.2"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2444, 2317]
  line "E1: LTC (60.0+0.60s)" [2957, 2747]
  line "E1: VLTC (2m24s+1.12s)" [3052, 2866]
  line "P1: STC (8.0+0.08s)" [2627, 2730]
  line "P1: LTC (60.0+0.60s)" [2994, 3121]
  line "P1: VLTC (2m24s+1.12s)" [3054, 3168]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 88 | 32 | 52% | 3152 | 66% |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3052 | 65 | 68 | 54% | 3023 | 49% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 3121 | 95 | 32 | 53% | 3105 | 44% |
| 2.4 | LTC <sub>(60.0+0.60s)</sub> | 2957 | 75 | 56 | 59% | 2882 | 39% |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2730 | 96 | 32 | 58% | 2668 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4 | STC <sub>(8.0+0.08s)</sub> | 2444 | 103 | 32 | 56% | 2383 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3021 | 36 | 218 | 51% | 3011 | 55% |
| 2.3 | LTC <sub>(60.0+0.60s)</sub> | 2962 | 37 | 210 | 51% | 2958 | 47% |
| 2.3 | STC <sub>(8.0+0.08s)</sub> | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 33 | 278 | 47% | 2892 | 42% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2982 | 33 | 280 | 51% | 2965 | 43% |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 38 | 204 | 47% | 3074 | 47% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2747 | 34 | 270 | 46% | 2773 | 39% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2881 | 35 | 246 | 53% | 2853 | 46% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2994 | 39 | 190 | 49% | 3006 | 47% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2317 | 35 | 278 | 41% | 2406 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2543 | 33 | 304 | 48% | 2560 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2627 | 44 | 180 | 50% | 2627 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |