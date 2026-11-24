# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2526<sub>(+88) | 2820<sub>(+12) | 2904<sub>(+46) |  |
| 3.0 | 2026-01-17 | 2438 | 2808 | 2858 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2508<sub>(+144) | 2796<sub>(+37) | 2839<sub>(+39) |  |
| 3.0 | 2026-01-17 | 2364 | 2759 | 2800 |  |
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

Generated: 2026-11-24 05:37:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2438, 2526]
  line "E1: LTC (60.0+0.60s)" [2808, 2820]
  line "E1: VLTC (2m24s+1.12s)" [2858, 2904]
  line "P1: STC (8.0+0.08s)" [2364, 2508]
  line "P1: LTC (60.0+0.60s)" [2759, 2796]
  line "P1: VLTC (2m24s+1.12s)" [2800, 2839]
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
|  |  | P1 | 2839 | 31 | 336 | 48% | 2855 | 36% |
|  |  | E1 | 2904 | 25 | 512 | 48% | 2907 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2796 | 31 | 366 | 57% | 2633 | 31% |
|  |  | E1 | 2820 | 27 | 476 | 50% | 2797 | 33% |
|  |  | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2508 | 34 | 294 | 49% | 2515 | 33% |
|  |  | E1 | 2526 | 29 | 414 | 50% | 2527 | 34% |
|  |  | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  |  | P1 | 2800 | 65 | 84 | 51% | 2723 | 36% |
|  |  | E1 | 2858 | 63 | 88 | 53% | 2822 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2759 | 65 | 78 | 47% | 2768 | 36% |
|  |  | E1 | 2808 | 56 | 130 | 65% | 2611 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2364 | 68 | 94 | 55% | 2214 | 20% |
|  |  | E1 | 2438 | 53 | 128 | 51% | 2425 | 27% |