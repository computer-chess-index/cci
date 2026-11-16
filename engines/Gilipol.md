# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2599<sub>(+116) | 2943<sub>(+63) | 3073<sub>(+95) |  |
| 1.00netbin | 2026-04-13 | 2483 | 2880 | 2978 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2584<sub>(+232) | 2897<sub>(+75) | 3011<sub>(+154) |  |
| 1.00netbin | 2026-04-13 | 2352 | 2822 | 2857 |  |
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

Generated: 2026-11-16 05:38:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00netbin", "2.00"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2483, 2599]
  line "E1: LTC (60.0+0.60s)" [2880, 2943]
  line "E1: VLTC (2m24s+1.12s)" [2978, 3073]
  line "P1: STC (8.0+0.08s)" [2352, 2584]
  line "P1: LTC (60.0+0.60s)" [2822, 2897]
  line "P1: VLTC (2m24s+1.12s)" [2857, 3011]
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
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3011 | 33 | 256 | 50% | 2988 | 54% |
|  |  | E1 | 3073 | 28 | 372 | 51% | 3056 | 48% |
|  |  | T1 | 3117 | 24 | 488 | 53% | 3092 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2897 | 34 | 258 | 53% | 2870 | 47% |
|  |  | E1 | 2943 | 28 | 398 | 52% | 2927 | 44% |
|  |  | T1 | 3006 | 26 | 432 | 52% | 2985 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2584 | 33 | 290 | 49% | 2583 | 39% |
|  |  | E1 | 2599 | 27 | 442 | 48% | 2622 | 31% |
|  |  | T1 | 2666 | 27 | 436 | 51% | 2655 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3013 | 28 | 426 | 57% | 2795 | 41% |
|  |  | P1 | 2857 | 83 | 48 | 49% | 2867 | 35% |
|  |  | E1 | 2978 | 62 | 76 | 49% | 2982 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2871 | 25 | 546 | 59% | 2695 | 39% |
|  |  | P1 | 2822 | 76 | 76 | 71% | 2435 | 26% |
|  |  | E1 | 2880 | 70 | 76 | 51% | 2813 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2550 | 28 | 470 | 55% | 2388 | 28% |
|  |  | P1 | 2352 | 87 | 48 | 52% | 2334 | 25% |
|  |  | E1 | 2483 | 65 | 80 | 44% | 2596 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 471 | 58 | 176 | 24% | 1060 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 460 | 59 | 148 | 27% | 952 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 400 | 56 | 132 | 34% | 740 | 40% |