# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1962<sub>(+242) | 2228<sub>(+59) | 2426<sub>(+61) |  |
| 1.004 | 2009-10-31 | 1720 | 2169 | 2365 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1920<sub>(+253) | 2233<sub>(+151) | 2358<sub>(+116) |  |
| 1.004 | 2009-10-31 | 1667 | 2082 | 2242 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1974<sub>(+261) | 2331<sub>(+249) | 2454<sub>(+132) |  |
| 1.004 | 2009-10-31 | 1713 | 2082 | 2322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ares+<version>&body=###%20Engine%20name%0AAres%0A%0A###%20Version%0A2.5" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:35:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1600 --> 2500
  line "E1: STC (8.0+0.08s)" [1720, 1962]
  line "E1: LTC (60.0+0.60s)" [2169, 2228]
  line "E1: VLTC (2m24s+1.12s)" [2365, 2426]
  line "P1: STC (8.0+0.08s)" [1667, 1920]
  line "P1: LTC (60.0+0.60s)" [2082, 2233]
  line "P1: VLTC (2m24s+1.12s)" [2242, 2358]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1713, 1974]
  line "T1: LTC (60.0+0.60s)" [2082, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2322, 2454]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2454 | 27 | 458 | 50% | 2452 | 26% |
|  |  | P1 | 2358 | 36 | 292 | 44% | 2437 | 24% |
|  |  | E1 | 2426 | 34 | 324 | 49% | 2446 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 24 | 588 | 52% | 2311 | 24% |
|  |  | P1 | 2233 | 33 | 314 | 51% | 2232 | 27% |
|  |  | E1 | 2228 | 34 | 316 | 50% | 2233 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1974 | 22 | 770 | 51% | 1963 | 22% |
|  |  | P1 | 1920 | 38 | 248 | 54% | 1878 | 21% |
|  |  | E1 | 1962 | 31 | 376 | 51% | 1971 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2322 | 45 | 176 | 47% | 2388 | 27% |
|  |  | P1 | 2242 | 60 | 100 | 49% | 2267 | 21% |
|  |  | E1 | 2365 | 72 | 72 | 44% | 2449 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2082 | 66 | 94 | 45% | 2148 | 15% |
|  |  | T1 | 2082 | 79 | 60 | 49% | 2097 | 15% |
|  |  | E1 | 2169 | 65 | 92 | 51% | 2191 | 17% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1667 | 62 | 96 | 42% | 1787 | 24% |
|  |  | T1 | 1713 | 50 | 184 | 33% | 2012 | 14% |
|  |  | E1 | 1720 | 66 | 94 | 40% | 1889 | 19% |