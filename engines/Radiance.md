# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1709<sub>(+38) | 2064<sub>(+115) | 2178<sub>(+85) |  |
| 4.3 | 2026-03-25 | 1671<sub>(+90) | 1949<sub>(+104) | 2093<sub>(+200) |  |
| 4.2 | 2026-01-17 | 1581<sub>(+new) | 1845<sub>(+new) | 1893<sub>(+new) |  |
| 4.1 | 2025-08-16 |  |  |  |  |
| 4.0.1 | 2025-04-17 |  |  |  |  |
| 4.0 | 2025-04-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 15:03:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1581, 1671, 1709]
  line "STC (8.0+0.08s)" [1581, 1671, 1709]
  line "LTC (60.0+0.60s)" [1845, 1949, 2064]
  line "VLTC (2m24s+1.12s)" [1893, 2093, 2178]
  line "VLTC (2m24s+1.12s)" [1893, 2093, 2178]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2178 | 33 | 322 | 49% | 2180 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2064 | 31 | 370 | 52% | 2039 | 23% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1709 | 31 | 392 | 49% | 1712 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2093 | 30 | 412 | 54% | 2052 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1949 | 31 | 362 | 49% | 1960 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1671 | 32 | 360 | 49% | 1679 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1893 | 36 | 304 | 45% | 1986 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1845 | 39 | 246 | 47% | 1901 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1581 | 34 | 328 | 45% | 1658 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |