# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-10-10 | 2205<sub>(+716) | 2658<sub>(+829) | 2808<sub>(+904) |  |
| 4.4 | 2026-04-23 | 1489 | 1829 | 1904 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-10-10 | 2342<sub>(+610) | 2950<sub>(+911) | 2874<sub>(+806) |  |
| 4.4 | 2026-04-23 | 1732 | 2039 | 2068 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1709<sub>(+30) | 2067<sub>(+108) | 2207<sub>(+102) |  |
| 4.3 | 2026-03-25 | 1679<sub>(+89) | 1959<sub>(+104) | 2105<sub>(+204) |  |
| 4.2 | 2026-01-17 | 1590 | 1855 | 1901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:42:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.4", "5.0"]
  y-axis "Elo Rating" 1400 --> 3000
  line "E1: STC (8.0+0.08s)" [1489, 2205]
  line "E1: LTC (60.0+0.60s)" [1829, 2658]
  line "E1: VLTC (2m24s+1.12s)" [1904, 2808]
  line "P1: STC (8.0+0.08s)" [1732, 2342]
  line "P1: LTC (60.0+0.60s)" [2039, 2950]
  line "P1: VLTC (2m24s+1.12s)" [2068, 2874]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2300
  line "T1: STC (8.0+0.08s)" [1590, 1679, 1709]
  line "T1: LTC (60.0+0.60s)" [1855, 1959, 2067]
  line "T1: VLTC (2m24s+1.12s)" [1901, 2105, 2207]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 113 | 30 | 72% | 2618 | 30% |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2808 | 103 | 36 | 65% | 2569 | 31% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2950 | 101 | 38 | 55% | 2822 | 26% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2658 | 83 | 50 | 65% | 2491 | 34% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2342 | 132 | 24 | 67% | 2148 | 8% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2205 | 74 | 64 | 56% | 2132 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 28 | 444 | 50% | 2201 | 21% |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2068 | 78 | 64 | 48% | 2133 | 17% |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1904 | 47 | 172 | 45% | 1987 | 16% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2067 | 26 | 510 | 50% | 2057 | 22% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2039 | 53 | 124 | 53% | 2024 | 23% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 1829 | 53 | 132 | 44% | 1933 | 21% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1732 | 69 | 72 | 52% | 1709 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1489 | 48 | 160 | 44% | 1562 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1709 | 26 | 576 | 48% | 1721 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2105 | 30 | 412 | 54% | 2063 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1959 | 31 | 362 | 49% | 1968 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1679 | 32 | 360 | 49% | 1689 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1901 | 36 | 304 | 45% | 1994 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1855 | 39 | 246 | 47% | 1910 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1590 | 34 | 328 | 45% | 1667 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |