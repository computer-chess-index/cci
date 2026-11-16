# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1760<sub>(-29) | 2066<sub>(+5) | 2156<sub>(-82) |  |
| 0.0.76 | 2026-01-05 | 1789 | 2061 | 2238 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1800<sub>(+17) | 2067<sub>(+39) | 2118<sub>(-60) |  |
| 0.0.76 | 2026-01-05 | 1783 | 2028 | 2178 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1866<sub>(-54) | 2145<sub>(+3) | 2241<sub>(+23) |  |
| 0.0.76 | 2026-01-05 | 1920 | 2142 | 2218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fktb+<version>&body=###%20Engine%20name%0AFktb%0A%0A###%20Version%0A0.0.77" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:38:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1700 --> 2300
  line "E1: STC (8.0+0.08s)" [1789, 1760]
  line "E1: LTC (60.0+0.60s)" [2061, 2066]
  line "E1: VLTC (2m24s+1.12s)" [2238, 2156]
  line "P1: STC (8.0+0.08s)" [1783, 1800]
  line "P1: LTC (60.0+0.60s)" [2028, 2067]
  line "P1: VLTC (2m24s+1.12s)" [2178, 2118]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "T1: STC (8.0+0.08s)" [1920, 1866]
  line "T1: LTC (60.0+0.60s)" [2142, 2145]
  line "T1: VLTC (2m24s+1.12s)" [2218, 2241]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2241 | 24 | 580 | 52% | 2221 | 31% |
|  |  | P1 | 2118 | 41 | 210 | 47% | 2156 | 30% |
|  |  | E1 | 2156 | 31 | 370 | 51% | 2153 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2145 | 25 | 536 | 49% | 2153 | 29% |
|  |  | P1 | 2067 | 42 | 212 | 42% | 2174 | 25% |
|  |  | E1 | 2066 | 28 | 434 | 52% | 2061 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1866 | 22 | 740 | 50% | 1856 | 27% |
|  |  | P1 | 1800 | 40 | 216 | 51% | 1804 | 25% |
|  |  | E1 | 1760 | 30 | 376 | 47% | 1794 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2178 | 80 | 56 | 46% | 2237 | 20% |
|  |  | E1 | 2238 | 61 | 94 | 42% | 2369 | 29% |
|  |  | T1 | 2218 | 52 | 132 | 48% | 2245 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2028 | 85 | 54 | 45% | 2088 | 28% |
|  |  | E1 | 2061 | 59 | 108 | 50% | 2084 | 25% |
|  |  | T1 | 2142 | 45 | 172 | 49% | 2152 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1789 | 54 | 116 | 43% | 1863 | 28% |
|  |  | T1 | 1920 | 49 | 140 | 48% | 1939 | 27% |
|  |  | P1 | 1783 | 64 | 90 | 43% | 1898 | 23% |