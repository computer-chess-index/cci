# Engine: KnightStalker

Author: Ted Summers

Home: https://github.com/tedsummers/KnightStalker

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-11-24 | 1804<sub>(+341) | 2044<sub>(+298) | 2079<sub>(+281) |  |
| 1.1.0 | 2026-11-15 | 1463 | 1746 | 1798 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-11-24 | 1775<sub>(+298) | 1955<sub>(+274) | 2102<sub>(+371) |  |
| 1.1.0 | 2026-11-15 | 1477 | 1681 | 1731 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-15 | 1477 | 1681 | 1731 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+KnightStalker+<version>&body=###%20Engine%20name%0AKnightStalker%0A%0A###%20Version%0A2.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:39:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.5.0"]
  y-axis "Elo Rating" 1400 --> 2200
  line "E1: STC (8.0+0.08s)" [1463, 1804]
  line "E1: LTC (60.0+0.60s)" [1746, 2044]
  line "E1: VLTC (2m24s+1.12s)" [1798, 2079]
  line "P1: STC (8.0+0.08s)" [1477, 1775]
  line "P1: LTC (60.0+0.60s)" [1681, 1955]
  line "P1: VLTC (2m24s+1.12s)" [1731, 2102]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2102 | 57 | 104 | 55% | 2057 | 29% |
|  |  | E1 | 2079 | 40 | 210 | 52% | 2056 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1955 | 58 | 108 | 51% | 1945 | 20% |
|  |  | E1 | 2044 | 44 | 178 | 54% | 2003 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1775 | 62 | 98 | 53% | 1742 | 14% |
|  |  | E1 | 1804 | 43 | 192 | 48% | 1816 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1798 | 43 | 192 | 51% | 1809 | 20% |
|  |  | P1 | 1731 | 55 | 118 | 45% | 1794 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1681 | 48 | 148 | 51% | 1674 | 26% |
|  |  | E1 | 1746 | 46 | 180 | 48% | 1794 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1477 | 50 | 148 | 43% | 1608 | 24% |
|  |  | E1 | 1463 | 44 | 196 | 46% | 1532 | 20% |