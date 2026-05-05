# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2512<sub>(-370) | 2800<sub>(-355) | 2878<sub>(-303) |  |
| 1.0 | 2025-10-19 | 2882 | 3155 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Publius+<version>&body=###%20Engine%20name%0APublius%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:27:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2882, 2512]
  line "STC (8.0+0.08s)" [2882, 2512]
  line "LTC (60.0+0.60s)" [3155, 2800]
  line "VLTC (2m24s+1.12s)" [3181, 2878]
  line "VLTC (2m24s+1.12s)" [3181, 2878]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2878 | 28 | 414 | 48% | 2894 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2800 | 28 | 428 | 50% | 2803 | 33% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2512 | 27 | 462 | 49% | 2503 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 34 | 232 | 49% | 3191 | 57% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3155 | 34 | 248 | 52% | 3128 | 55% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2882 | 36 | 232 | 53% | 2849 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |