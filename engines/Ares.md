# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1962<sub>(+241) | 2232<sub>(+60) | 2435<sub>(+67) |  |
| 1.004 | 2009-10-31 | 1721 | 2172 | 2368 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1918<sub>(+253) | 2232<sub>(+165) | 2350<sub>(+112) |  |
| 1.004 | 2009-10-31 | 1665 | 2067 | 2238 |  |
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

Generated: 2026-11-20 05:36:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1600 --> 2500
  line "E1: STC (8.0+0.08s)" [1721, 1962]
  line "E1: LTC (60.0+0.60s)" [2172, 2232]
  line "E1: VLTC (2m24s+1.12s)" [2368, 2435]
  line "P1: STC (8.0+0.08s)" [1665, 1918]
  line "P1: LTC (60.0+0.60s)" [2067, 2232]
  line "P1: VLTC (2m24s+1.12s)" [2238, 2350]
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
|  |  | P1 | 2350 | 36 | 292 | 44% | 2429 | 24% |
|  |  | E1 | 2435 | 34 | 320 | 50% | 2450 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 24 | 588 | 52% | 2311 | 24% |
|  |  | P1 | 2232 | 34 | 302 | 52% | 2225 | 26% |
|  |  | E1 | 2232 | 34 | 312 | 50% | 2237 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1974 | 22 | 770 | 51% | 1963 | 22% |
|  |  | P1 | 1918 | 38 | 244 | 54% | 1871 | 22% |
|  |  | E1 | 1962 | 31 | 364 | 50% | 1972 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2368 | 72 | 72 | 44% | 2452 | 18% |
|  |  | T1 | 2322 | 45 | 176 | 47% | 2388 | 27% |
|  |  | P1 | 2238 | 66 | 84 | 48% | 2265 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2172 | 65 | 92 | 51% | 2194 | 17% |
|  |  | P1 | 2067 | 74 | 76 | 43% | 2156 | 14% |
|  |  | T1 | 2082 | 79 | 60 | 49% | 2097 | 15% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1665 | 65 | 88 | 42% | 1790 | 25% |
|  |  | T1 | 1713 | 50 | 184 | 33% | 2012 | 14% |
|  |  | E1 | 1721 | 66 | 94 | 40% | 1891 | 19% |