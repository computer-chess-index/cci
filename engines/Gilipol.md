# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2593<sub>(+97) | 2951<sub>(+80) | 3071<sub>(+86) |  |
| 1.00netbin | 2026-04-13 | 2496 | 2871 | 2985 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2597<sub>(+178) | 2931<sub>(+73) | 3028<sub>(+165) |  |
| 1.00netbin | 2026-04-13 | 2419 | 2858 | 2863 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2666<sub>(+116) | 3006<sub>(+135) | 3117<sub>(+104) |  |
| 1.00netbin | 2026-04-13 | 2550<sub>(+2150) | 2871<sub>(+2411) | 3013<sub>(+2542) |  |
| 1.00 | 2026-04-12 | 400 | 460 | 471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:38:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00netbin", "2.00"]
  y-axis "Elo Rating" 2400 --> 3100
  line "E1: STC (8.0+0.08s)" [2496, 2593]
  line "E1: LTC (60.0+0.60s)" [2871, 2951]
  line "E1: VLTC (2m24s+1.12s)" [2985, 3071]
  line "P1: STC (8.0+0.08s)" [2419, 2597]
  line "P1: LTC (60.0+0.60s)" [2858, 2931]
  line "P1: VLTC (2m24s+1.12s)" [2863, 3028]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 400 --> 3200
  line "T1: STC (8.0+0.08s)" [400, 2550, 2666]
  line "T1: LTC (60.0+0.60s)" [460, 2871, 3006]
  line "T1: VLTC (2m24s+1.12s)" [471, 3013, 3117]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3117 | 24 | 488 | 53% | 3092 | 54% |
|  |  | P1 | 3028 | 32 | 280 | 49% | 3016 | 54% |
|  |  | E1 | 3071 | 27 | 392 | 52% | 3055 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3006 | 26 | 432 | 52% | 2985 | 46% |
|  |  | P1 | 2931 | 31 | 306 | 52% | 2908 | 46% |
|  |  | E1 | 2951 | 27 | 422 | 53% | 2927 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2666 | 27 | 436 | 51% | 2655 | 33% |
|  |  | P1 | 2597 | 32 | 314 | 49% | 2603 | 39% |
|  |  | E1 | 2593 | 27 | 468 | 47% | 2619 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2863 | 68 | 72 | 47% | 2890 | 33% |
|  |  | E1 | 2985 | 58 | 88 | 49% | 2985 | 44% |
|  |  | T1 | 3013 | 28 | 426 | 57% | 2795 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2871 | 65 | 84 | 51% | 2819 | 32% |
|  |  | T1 | 2871 | 25 | 546 | 59% | 2695 | 39% |
|  |  | P1 | 2858 | 62 | 104 | 67% | 2552 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2496 | 59 | 100 | 46% | 2576 | 28% |
|  |  | T1 | 2550 | 28 | 470 | 55% | 2388 | 28% |
|  |  | P1 | 2419 | 62 | 92 | 54% | 2380 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 471 | 58 | 176 | 24% | 1060 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 460 | 59 | 148 | 27% | 952 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 400 | 56 | 132 | 34% | 740 | 40% |