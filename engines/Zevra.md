# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2572<sub>(+386) | 2930<sub>(+520) | 3050<sub>(+369) |  |
| 2.5 | 2021-09-20 | 2186 | 2410 | 2681 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2600<sub>(+533) | 2942<sub>(+512) | 3021<sub>(+502) |  |
| 2.5 | 2021-09-20 | 2067 | 2430 | 2519 |  |
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

Generated: 2026-11-22 05:44:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2186, 2572]
  line "E1: LTC (60.0+0.60s)" [2410, 2930]
  line "E1: VLTC (2m24s+1.12s)" [2681, 3050]
  line "P1: STC (8.0+0.08s)" [2067, 2600]
  line "P1: LTC (60.0+0.60s)" [2430, 2942]
  line "P1: VLTC (2m24s+1.12s)" [2519, 3021]
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
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3042 | 30 | 304 | 50% | 3040 | 54% |
|  |  | E1 | 3050 | 25 | 456 | 48% | 3066 | 51% |
|  |  | P1 | 3021 | 32 | 280 | 50% | 3023 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2930 | 27 | 394 | 48% | 2954 | 48% |
|  |  | P1 | 2942 | 32 | 306 | 51% | 2936 | 41% |
|  |  | T1 | 2939 | 32 | 296 | 53% | 2915 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2600 | 31 | 330 | 48% | 2616 | 36% |
|  |  | T1 | 2566 | 35 | 268 | 51% | 2560 | 30% |
|  |  | E1 | 2572 | 28 | 424 | 50% | 2573 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2569 | 33 | 316 | 52% | 2526 | 29% |
|  |  | E1 | 2681 | 59 | 98 | 45% | 2726 | 30% |
|  |  | P1 | 2519 | 67 | 88 | 50% | 2483 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2410 | 54 | 128 | 61% | 2307 | 21% |
|  |  | P1 | 2430 | 60 | 92 | 46% | 2469 | 26% |
|  |  | T1 | 2499 | 14 | 1812 | 51% | 2488 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2067 | 61 | 104 | 49% | 2115 | 17% |
|  |  | T1 | 2228 | 14 | 1898 | 51% | 2214 | 23% |
|  |  | E1 | 2186 | 58 | 108 | 48% | 2242 | 26% |