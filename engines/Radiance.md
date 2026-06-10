# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1706<sub>(+39) | 2061<sub>(+116) | 2184<sub>(+96) |  |
| 4.3 | 2026-03-25 | 1667<sub>(+90) | 1945<sub>(+104) | 2088<sub>(+199) |  |
| 4.2 | 2026-01-17 | 1577<sub>(+new) | 1841<sub>(+new) | 1889<sub>(+new) |  |
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

Generated: 2026-06-10 06:27:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1577, 1667, 1706]
  line "STC (8.0+0.08s)" [1577, 1667, 1706]
  line "LTC (60.0+0.60s)" [1841, 1945, 2061]
  line "VLTC (2m24s+1.12s)" [1889, 2088, 2184]
  line "VLTC (2m24s+1.12s)" [1889, 2088, 2184]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2184 | 33 | 334 | 50% | 2176 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2061 | 30 | 384 | 52% | 2036 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1706 | 31 | 400 | 50% | 1696 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2088 | 30 | 412 | 54% | 2048 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1945 | 31 | 362 | 49% | 1955 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1667 | 32 | 360 | 49% | 1675 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1889 | 36 | 304 | 45% | 1980 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1841 | 39 | 246 | 47% | 1897 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1577 | 34 | 328 | 45% | 1654 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |