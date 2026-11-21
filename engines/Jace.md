# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1778<sub>(+30) | 2040<sub>(+6) | 2099<sub>(+21) |  |
| 1.5.1 | 2026-11-05 | 1748 | 2034 | 2078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1735<sub>(-34) | 1983<sub>(+15) | 2036<sub>(+23) |  |
| 1.5.1 | 2026-11-05 | 1769 | 1968 | 2013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-11-05 | 1769 | 1968 | 2013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Jace+<version>&body=###%20Engine%20name%0AJace%0A%0A###%20Version%0A1.5.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:39:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2100
  line "E1: STC (8.0+0.08s)" [1748, 1778]
  line "E1: LTC (60.0+0.60s)" [2034, 2040]
  line "E1: VLTC (2m24s+1.12s)" [2078, 2099]
  line "P1: STC (8.0+0.08s)" [1769, 1735]
  line "P1: LTC (60.0+0.60s)" [1968, 1983]
  line "P1: VLTC (2m24s+1.12s)" [2013, 2036]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2036 | 54 | 124 | 52% | 2014 | 19% |
|  |  | E1 | 2099 | 44 | 188 | 44% | 2175 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1983 | 77 | 56 | 50% | 1987 | 25% |
|  |  | E1 | 2040 | 36 | 286 | 44% | 2142 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1735 | 63 | 84 | 52% | 1713 | 25% |
|  |  | E1 | 1778 | 47 | 164 | 47% | 1806 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2013 | 40 | 244 | 44% | 2059 | 18% |
|  |  | E1 | 2078 | 33 | 344 | 46% | 2121 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1968 | 44 | 178 | 48% | 1993 | 24% |
|  |  | E1 | 2034 | 38 | 256 | 51% | 2024 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1769 | 42 | 204 | 52% | 1750 | 20% |
|  |  | E1 | 1748 | 37 | 262 | 50% | 1748 | 18% |