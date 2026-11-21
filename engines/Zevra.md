# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2566<sub>(+382) | 2927<sub>(+520) | 3047<sub>(+369) |  |
| 2.5 | 2021-09-20 | 2184 | 2407 | 2678 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2600<sub>(+532) | 2946<sub>(+524) | 3020<sub>(+502) |  |
| 2.5 | 2021-09-20 | 2068 | 2422 | 2518 |  |
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

Generated: 2026-11-21 05:44:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2184, 2566]
  line "E1: LTC (60.0+0.60s)" [2407, 2927]
  line "E1: VLTC (2m24s+1.12s)" [2678, 3047]
  line "P1: STC (8.0+0.08s)" [2068, 2600]
  line "P1: LTC (60.0+0.60s)" [2422, 2946]
  line "P1: VLTC (2m24s+1.12s)" [2518, 3020]
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
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3047 | 25 | 456 | 48% | 3063 | 51% |
|  |  | P1 | 3020 | 33 | 276 | 50% | 3024 | 47% |
|  |  | T1 | 3042 | 30 | 304 | 50% | 3040 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2939 | 32 | 296 | 53% | 2915 | 41% |
|  |  | E1 | 2927 | 28 | 386 | 48% | 2951 | 48% |
|  |  | P1 | 2946 | 32 | 298 | 51% | 2936 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2566 | 35 | 268 | 51% | 2560 | 30% |
|  |  | E1 | 2566 | 28 | 420 | 50% | 2569 | 30% |
|  |  | P1 | 2600 | 31 | 330 | 48% | 2616 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2678 | 59 | 98 | 45% | 2722 | 30% |
|  |  | P1 | 2518 | 69 | 84 | 50% | 2481 | 24% |
|  |  | T1 | 2569 | 33 | 316 | 52% | 2526 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2499 | 14 | 1812 | 51% | 2488 | 27% |
|  |  | E1 | 2407 | 54 | 128 | 61% | 2304 | 21% |
|  |  | P1 | 2422 | 62 | 88 | 44% | 2473 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2228 | 14 | 1898 | 51% | 2214 | 23% |
|  |  | E1 | 2184 | 58 | 108 | 48% | 2241 | 26% |
|  |  | P1 | 2068 | 61 | 104 | 49% | 2117 | 17% |