# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1964<sub>(+235) | 2226<sub>(+138) | 2435<sub>(+70) |  |
| 1.004 | 2009-10-31 | 1729 | 2088 | 2365 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1901<sub>(+228) | 2211<sub>(+123) | 2323<sub>(+114) |  |
| 1.004 | 2009-10-31 | 1673 | 2088 | 2209 |  |
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

Generated: 2026-11-15 05:36:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1600 --> 2500
  line "E1: STC (8.0+0.08s)" [1729, 1964]
  line "E1: LTC (60.0+0.60s)" [2088, 2226]
  line "E1: VLTC (2m24s+1.12s)" [2365, 2435]
  line "P1: STC (8.0+0.08s)" [1673, 1901]
  line "P1: LTC (60.0+0.60s)" [2088, 2211]
  line "P1: VLTC (2m24s+1.12s)" [2209, 2323]
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
|  |  | P1 | 2323 | 37 | 276 | 43% | 2415 | 24% |
|  |  | E1 | 2435 | 35 | 300 | 50% | 2445 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 24 | 588 | 52% | 2311 | 24% |
|  |  | P1 | 2211 | 35 | 294 | 52% | 2206 | 26% |
|  |  | E1 | 2226 | 34 | 308 | 50% | 2233 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1974 | 22 | 770 | 51% | 1963 | 22% |
|  |  | P1 | 1901 | 39 | 232 | 54% | 1856 | 20% |
|  |  | E1 | 1964 | 32 | 352 | 50% | 1978 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2365 | 77 | 62 | 43% | 2456 | 18% |
|  |  | T1 | 2322 | 45 | 176 | 47% | 2388 | 27% |
|  |  | P1 | 2209 | 82 | 56 | 47% | 2250 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2082 | 79 | 60 | 49% | 2097 | 15% |
|  |  | E1 | 2088 | 92 | 48 | 42% | 2223 | 17% |
|  |  | P1 | 2088 | 100 | 44 | 41% | 2199 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1729 | 77 | 74 | 38% | 1940 | 16% |
|  |  | P1 | 1673 | 77 | 64 | 41% | 1827 | 25% |
|  |  | T1 | 1713 | 50 | 184 | 33% | 2012 | 14% |