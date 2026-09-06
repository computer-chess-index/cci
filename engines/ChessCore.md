# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1434<sub>(+724) | 1805<sub>(+751) | 1875<sub>(+795) |  |
| 1.1.5 | 2026-05-25 | 710<sub>(+20) | 1054<sub>(+398) | 1080<sub>(+386) |  |
| 1.1.4 | 2026-05-21 | 690<sub>(+22) | 656<sub>(-336) | 694<sub>(-297) |  |
| 1.1.2 | 2026-05-19 | 668<sub>(-25) | 992<sub>(+4) | 991<sub>(-140) |  |
| 1.1.1 | 2026-05-14 | 693<sub>(+new) | 988<sub>(+new) | 1131<sub>(+new) |  |
| 1.1.0 | 2026-05-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:23:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "" [693, 668, 690, 710, 1434]
  line "STC (8.0+0.08s)" [693, 668, 690, 710, 1434]
  line "LTC (60.0+0.60s)" [988, 992, 656, 1054, 1805]
  line "" [1131, 991, 694, 1080, 1875]
  line "VLTC (2m24s+1.12s)" [1131, 991, 694, 1080, 1875]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1875 | 34 | 276 | 55% | 1814 | 40% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1805 | 32 | 322 | 54% | 1756 | 36% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1434 | 33 | 328 | 54% | 1385 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1080 | 60 | 102 | 49% | 1095 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1054 | 59 | 104 | 57% | 983 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 710 | 77 | 50 | 49% | 722 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 694 | 39 | 244 | 52% | 662 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 656 | 41 | 218 | 53% | 609 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 690 | 42 | 234 | 52% | 640 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 991 | 53 | 120 | 53% | 969 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 992 | 57 | 104 | 53% | 964 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 668 | 90 | 44 | 55% | 626 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1131 | 31 | 412 | 49% | 1122 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 988 | 36 | 328 | 48% | 991 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 693 | 42 | 248 | 45% | 730 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |