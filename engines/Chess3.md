# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2522<sub>(+77) | 2816<sub>(+20) | 2907<sub>(+53) |  |
| 3.0 | 2026-01-17 | 2445 | 2796 | 2854 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2483<sub>(+146) | 2780<sub>(+26) | 2824<sub>(+48) |  |
| 3.0 | 2026-01-17 | 2337 | 2754 | 2776 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2511<sub>(+35) | 2807<sub>(+45) | 2894<sub>(+86) |  |
| 3.0 | 2026-01-17 | 2476 | 2762 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:37:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2445, 2522]
  line "E1: LTC (60.0+0.60s)" [2796, 2816]
  line "E1: VLTC (2m24s+1.12s)" [2854, 2907]
  line "P1: STC (8.0+0.08s)" [2337, 2483]
  line "P1: LTC (60.0+0.60s)" [2754, 2780]
  line "P1: VLTC (2m24s+1.12s)" [2776, 2824]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "T1: STC (8.0+0.08s)" [2476, 2511]
  line "T1: LTC (60.0+0.60s)" [2762, 2807]
  line "T1: VLTC (2m24s+1.12s)" [2808, 2894]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2824 | 31 | 320 | 49% | 2832 | 36% |
|  |  | E1 | 2907 | 26 | 472 | 49% | 2898 | 39% |
|  |  | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2780 | 33 | 322 | 58% | 2592 | 30% |
|  |  | E1 | 2816 | 27 | 452 | 50% | 2796 | 33% |
|  |  | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2483 | 35 | 268 | 48% | 2499 | 33% |
|  |  | E1 | 2522 | 30 | 382 | 49% | 2525 | 34% |
|  |  | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  |  | P1 | 2776 | 68 | 76 | 51% | 2701 | 36% |
|  |  | E1 | 2854 | 68 | 76 | 53% | 2815 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2754 | 71 | 66 | 48% | 2750 | 33% |
|  |  | E1 | 2796 | 59 | 118 | 65% | 2591 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2337 | 79 | 74 | 55% | 2159 | 19% |
|  |  | E1 | 2445 | 57 | 112 | 52% | 2421 | 25% |