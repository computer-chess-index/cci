# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2939<sub>(+41) | 3193<sub>(+57) | 3260<sub>(+59) |  |
| 1.6 | 2025-10-18 | 2898 | 3136 | 3201 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bitbit+<version>&body=###%20Engine%20name%0ABitbit%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:23:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2898, 2939]
  line "STC (8.0+0.08s)" [2898, 2939]
  line "LTC (60.0+0.60s)" [3136, 3193]
  line "VLTC (2m24s+1.12s)" [3201, 3260]
  line "VLTC (2m24s+1.12s)" [3201, 3260]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3260 | 31 | 274 | 50% | 3266 | 63% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 31 | 276 | 50% | 3194 | 60% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2939 | 31 | 308 | 51% | 2928 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3201 | 24 | 478 | 52% | 3177 | 54% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 24 | 510 | 52% | 3108 | 52% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2898 | 21 | 692 | 50% | 2885 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |