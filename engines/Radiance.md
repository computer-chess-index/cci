# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1701<sub>(+38) | 2060<sub>(+117) | 2183<sub>(+96) |  |
| 4.3 | 2026-03-25 | 1663<sub>(+89) | 1943<sub>(+104) | 2087<sub>(+201) |  |
| 4.2 | 2026-01-17 | 1574<sub>(+new) | 1839<sub>(+new) | 1886<sub>(+new) |  |
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

Generated: 2026-07-28 06:31:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2200
  line "STC (8.0+0.08s)" [1574, 1663, 1701]
  line "STC (8.0+0.08s)" [1574, 1663, 1701]
  line "LTC (60.0+0.60s)" [1839, 1943, 2060]
  line "VLTC (2m24s+1.12s)" [1886, 2087, 2183]
  line "VLTC (2m24s+1.12s)" [1886, 2087, 2183]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2183 | 31 | 384 | 49% | 2180 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2060 | 29 | 430 | 52% | 2037 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1701 | 29 | 462 | 49% | 1709 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2087 | 30 | 412 | 54% | 2047 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1943 | 31 | 362 | 49% | 1953 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1663 | 32 | 360 | 49% | 1673 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1886 | 36 | 304 | 45% | 1979 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1839 | 39 | 246 | 47% | 1895 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1574 | 34 | 328 | 45% | 1651 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |