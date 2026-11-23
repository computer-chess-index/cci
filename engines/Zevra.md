# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2568<sub>(+384) | 2924<sub>(+517) | 3048<sub>(+368) |  |
| 2.5 | 2021-09-20 | 2184 | 2407 | 2680 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2601<sub>(+531) | 2951<sub>(+516) | 3028<sub>(+506) |  |
| 2.5 | 2021-09-20 | 2070 | 2435 | 2522 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2566<sub>(+338) | 2939<sub>(+440) | 3042<sub>(+473) |  |
| 2.5 | 2021-09-20 | 2228 | 2499 | 2569 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zevra+<version>&body=###%20Engine%20name%0AZevra%0A%0A###%20Version%0A2.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:44:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2184, 2568]
  line "E1: LTC (60.0+0.60s)" [2407, 2924]
  line "E1: VLTC (2m24s+1.12s)" [2680, 3048]
  line "P1: STC (8.0+0.08s)" [2070, 2601]
  line "P1: LTC (60.0+0.60s)" [2435, 2951]
  line "P1: VLTC (2m24s+1.12s)" [2522, 3028]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2200 --> 3100
  line "T1: STC (8.0+0.08s)" [2228, 2566]
  line "T1: LTC (60.0+0.60s)" [2499, 2939]
  line "T1: VLTC (2m24s+1.12s)" [2569, 3042]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3028 | 32 | 280 | 50% | 3029 | 47% |
|  |  | T1 | 3042 | 30 | 304 | 50% | 3040 | 54% |
|  |  | E1 | 3048 | 25 | 460 | 48% | 3063 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2939 | 32 | 296 | 53% | 2915 | 41% |
|  |  | E1 | 2924 | 27 | 406 | 47% | 2951 | 48% |
|  |  | P1 | 2951 | 31 | 314 | 51% | 2942 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2566 | 35 | 268 | 51% | 2560 | 30% |
|  |  | E1 | 2568 | 28 | 436 | 50% | 2570 | 28% |
|  |  | P1 | 2601 | 31 | 338 | 48% | 2622 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2522 | 67 | 88 | 50% | 2485 | 23% |
|  |  | T1 | 2569 | 33 | 316 | 52% | 2526 | 29% |
|  |  | E1 | 2680 | 59 | 98 | 45% | 2723 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2407 | 54 | 128 | 61% | 2306 | 21% |
|  |  | P1 | 2435 | 60 | 92 | 46% | 2475 | 26% |
|  |  | T1 | 2499 | 14 | 1812 | 51% | 2488 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2184 | 58 | 108 | 48% | 2242 | 26% |
|  |  | P1 | 2070 | 61 | 104 | 49% | 2118 | 17% |
|  |  | T1 | 2228 | 14 | 1898 | 51% | 2214 | 23% |