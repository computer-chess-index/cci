# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2522<sub>(+76) | 2816<sub>(+20) | 2905<sub>(+52) |  |
| 3.0 | 2026-01-17 | 2446 | 2796 | 2853 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2485<sub>(+145) | 2781<sub>(+27) | 2822<sub>(+48) |  |
| 3.0 | 2026-01-17 | 2340 | 2754 | 2774 |  |
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

Generated: 2026-11-19 05:37:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2446, 2522]
  line "E1: LTC (60.0+0.60s)" [2796, 2816]
  line "E1: VLTC (2m24s+1.12s)" [2853, 2905]
  line "P1: STC (8.0+0.08s)" [2340, 2485]
  line "P1: LTC (60.0+0.60s)" [2754, 2781]
  line "P1: VLTC (2m24s+1.12s)" [2774, 2822]
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
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  |  | P1 | 2822 | 31 | 328 | 49% | 2832 | 36% |
|  |  | E1 | 2905 | 26 | 476 | 49% | 2904 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  |  | P1 | 2781 | 32 | 346 | 58% | 2607 | 31% |
|  |  | E1 | 2816 | 27 | 452 | 50% | 2796 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
|  |  | P1 | 2485 | 35 | 272 | 49% | 2500 | 33% |
|  |  | E1 | 2522 | 30 | 382 | 49% | 2525 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  |  | P1 | 2774 | 68 | 76 | 51% | 2701 | 36% |
|  |  | E1 | 2853 | 68 | 76 | 53% | 2815 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2754 | 71 | 66 | 48% | 2750 | 33% |
|  |  | E1 | 2796 | 59 | 118 | 65% | 2591 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2340 | 79 | 74 | 55% | 2160 | 19% |
|  |  | E1 | 2446 | 57 | 112 | 52% | 2422 | 25% |