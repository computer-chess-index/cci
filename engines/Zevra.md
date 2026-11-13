# Engine: Zevra

Author: Oleg Smirnov

Home: https://github.com/sovaz1997/Zevra2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2557<sub>(+539) | 2904<sub>(+649) | 3020<sub>(+304) |  |
| 2.5 | 2021-09-20 | 2018 | 2255 | 2716 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7 | 2026-08-30 | 2587<sub>(+548) | 2925<sub>(+445) | 3028<sub>(+622) |  |
| 2.5 | 2021-09-20 | 2039 | 2480 | 2406 |  |
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

Generated: 2026-11-13 05:44:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.5", "2.7"]
  y-axis "Elo Rating" 2000 --> 3100
  line "E1: STC (8.0+0.08s)" [2018, 2557]
  line "E1: LTC (60.0+0.60s)" [2255, 2904]
  line "E1: VLTC (2m24s+1.12s)" [2716, 3020]
  line "P1: STC (8.0+0.08s)" [2039, 2587]
  line "P1: LTC (60.0+0.60s)" [2480, 2925]
  line "P1: VLTC (2m24s+1.12s)" [2406, 3028]
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
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3020 | 26 | 414 | 48% | 3040 | 51% |
|  |  | P1 | 3028 | 34 | 244 | 50% | 3028 | 48% |
|  |  | T1 | 3042 | 30 | 304 | 50% | 3040 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2925 | 34 | 260 | 50% | 2928 | 43% |
|  |  | T1 | 2939 | 32 | 296 | 53% | 2915 | 41% |
|  |  | E1 | 2904 | 28 | 362 | 48% | 2928 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2587 | 32 | 322 | 49% | 2596 | 36% |
|  |  | T1 | 2566 | 35 | 268 | 51% | 2560 | 30% |
|  |  | E1 | 2557 | 30 | 376 | 49% | 2564 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2716 | 113 | 28 | 50% | 2708 | 29% |
|  |  | P1 | 2406 | 168 | 24 | 50% | 2309 | 8% |
|  |  | T1 | 2569 | 33 | 316 | 52% | 2526 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2480 | 133 | 16 | 44% | 2537 | 38% |
|  |  | T1 | 2499 | 14 | 1812 | 51% | 2488 | 27% |
|  |  | E1 | 2255 | 99 | 36 | 57% | 2214 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2039 | 133 | 24 | 29% | 2256 | 8% |
|  |  | T1 | 2228 | 14 | 1898 | 51% | 2214 | 23% |
|  |  | E1 | 2018 | 134 | 28 | 18% | 2487 | 21% |