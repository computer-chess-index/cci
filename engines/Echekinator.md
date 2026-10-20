# Engine: Echekinator

Author: Timothee Fixy

Home: https://github.com/Tym972/Echekinator

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-10-14 | 2215<sub>(+469) | 2533<sub>(+516) | 2584<sub>(+536) |  |
| 1.0 | 2025-11-25 | 1746 | 2017 | 2048 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-10-14 | 2182<sub>(+389) | 2535<sub>(+577) | 2633<sub>(+551) |  |
| 1.0 | 2025-11-25 | 1793 | 1958 | 2082 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2098<sub>(+324) | 2331<sub>(+270) | 2418<sub>(+262) |  |
| 1.0 | 2025-11-25 | 1774 | 2061 | 2156 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-20 04:38:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2"]
  y-axis "Elo Rating" 1700 --> 2700
  line "E1: STC (8.0+0.08s)" [1746, 2215]
  line "E1: LTC (60.0+0.60s)" [2017, 2533]
  line "E1: VLTC (2m24s+1.12s)" [2048, 2584]
  line "P1: STC (8.0+0.08s)" [1793, 2182]
  line "P1: LTC (60.0+0.60s)" [1958, 2535]
  line "P1: VLTC (2m24s+1.12s)" [2082, 2633]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "T1: STC (8.0+0.08s)" [1774, 2098]
  line "T1: LTC (60.0+0.60s)" [2061, 2331]
  line "T1: VLTC (2m24s+1.12s)" [2156, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2633 | 56 | 108 | 56% | 2576 | 31% |
|  |  | E1 | 2584 | 43 | 192 | 49% | 2588 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2533 | 41 | 210 | 51% | 2515 | 24% |
|  |  | P1 | 2535 | 51 | 136 | 53% | 2493 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2215 | 40 | 224 | 47% | 2240 | 27% |
|  |  | P1 | 2182 | 55 | 114 | 49% | 2183 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2418 | 43 | 188 | 53% | 2383 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2331 | 42 | 194 | 51% | 2321 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2098 | 37 | 268 | 49% | 2109 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2156 | 26 | 544 | 47% | 2196 | 24% |
|  |  | P1 | 2082 | 51 | 156 | 54% | 2028 | 15% |
|  |  | E1 | 2048 | 42 | 208 | 45% | 2148 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2061 | 23 | 684 | 51% | 2049 | 24% |
|  |  | P1 | 1958 | 46 | 164 | 49% | 1980 | 25% |
|  |  | E1 | 2017 | 40 | 228 | 45% | 2095 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1774 | 22 | 796 | 48% | 1790 | 18% |
|  |  | P1 | 1793 | 40 | 216 | 50% | 1791 | 23% |
|  |  | E1 | 1746 | 42 | 204 | 50% | 1748 | 20% |