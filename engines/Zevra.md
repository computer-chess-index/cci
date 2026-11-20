# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2570<sub>(+383) | 2931<sub>(+520) | 3051<sub>(+369) |  |
| 2.5 | 2021-09-20 | 2187 | 2411 | 2682 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2595<sub>(+570) | 2938<sub>(+516) | 3016<sub>(+491) |  |
| 2.5 | 2021-09-20 | 2025 | 2422 | 2525 |  |
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

Generated: 2026-11-20 05:44:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2187, 2570]
  line "E1: LTC (60.0+0.60s)" [2411, 2931]
  line "E1: VLTC (2m24s+1.12s)" [2682, 3051]
  line "P1: STC (8.0+0.08s)" [2025, 2595]
  line "P1: LTC (60.0+0.60s)" [2422, 2938]
  line "P1: VLTC (2m24s+1.12s)" [2525, 3016]
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
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3051 | 25 | 456 | 48% | 3067 | 51% |
|  |  | P1 | 3016 | 33 | 272 | 51% | 3016 | 47% |
|  |  | T1 | 3042 | 30 | 304 | 50% | 3040 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2939 | 32 | 296 | 53% | 2915 | 41% |
|  |  | E1 | 2931 | 28 | 386 | 48% | 2955 | 48% |
|  |  | P1 | 2938 | 32 | 298 | 51% | 2928 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2566 | 35 | 268 | 51% | 2560 | 30% |
|  |  | E1 | 2570 | 28 | 416 | 50% | 2572 | 30% |
|  |  | P1 | 2595 | 31 | 330 | 48% | 2611 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2682 | 59 | 98 | 45% | 2727 | 30% |
|  |  | P1 | 2525 | 72 | 76 | 51% | 2469 | 24% |
|  |  | T1 | 2569 | 33 | 316 | 52% | 2526 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2499 | 14 | 1812 | 51% | 2488 | 27% |
|  |  | E1 | 2411 | 54 | 128 | 61% | 2309 | 21% |
|  |  | P1 | 2422 | 64 | 80 | 44% | 2479 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2228 | 14 | 1898 | 51% | 2214 | 23% |
|  |  | E1 | 2187 | 58 | 108 | 48% | 2245 | 26% |
|  |  | P1 | 2025 | 67 | 88 | 45% | 2125 | 19% |