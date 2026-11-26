# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2570<sub>(+382) | 2915<sub>(+461) | 3047<sub>(+385) |  |
| 2.5 | 2021-09-20 | 2188 | 2454 | 2662 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2610<sub>(+519) | 2963<sub>(+499) | 3039<sub>(+517) |  |
| 2.5 | 2021-09-20 | 2091 | 2464 | 2522 |  |
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

Generated: 2026-11-26 05:45:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2188, 2570]
  line "E1: LTC (60.0+0.60s)" [2454, 2915]
  line "E1: VLTC (2m24s+1.12s)" [2662, 3047]
  line "P1: STC (8.0+0.08s)" [2091, 2610]
  line "P1: LTC (60.0+0.60s)" [2464, 2963]
  line "P1: VLTC (2m24s+1.12s)" [2522, 3039]
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
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3047 | 25 | 460 | 48% | 3062 | 50% |
|  |  | P1 | 3039 | 32 | 280 | 50% | 3042 | 47% |
|  |  | T1 | 3042 | 30 | 304 | 50% | 3040 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2963 | 30 | 334 | 51% | 2952 | 43% |
|  |  | T1 | 2939 | 32 | 296 | 53% | 2915 | 41% |
|  |  | E1 | 2915 | 26 | 426 | 46% | 2947 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2566 | 35 | 268 | 51% | 2560 | 30% |
|  |  | E1 | 2570 | 27 | 452 | 50% | 2572 | 29% |
|  |  | P1 | 2610 | 30 | 362 | 48% | 2631 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2662 | 48 | 146 | 46% | 2704 | 29% |
|  |  | P1 | 2522 | 65 | 92 | 49% | 2499 | 24% |
|  |  | T1 | 2569 | 33 | 316 | 52% | 2526 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2464 | 54 | 112 | 48% | 2480 | 29% |
|  |  | T1 | 2499 | 14 | 1812 | 51% | 2488 | 27% |
|  |  | E1 | 2454 | 42 | 212 | 59% | 2364 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2228 | 14 | 1898 | 51% | 2214 | 23% |
|  |  | E1 | 2188 | 51 | 144 | 48% | 2234 | 22% |
|  |  | P1 | 2091 | 52 | 136 | 50% | 2118 | 21% |